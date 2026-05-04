import { google } from "googleapis";

export const runtime = "nodejs";

type SubmissionPayload = {
  formType?: string;
  fields?: Record<string, unknown>;
};

type SheetsClient = ReturnType<typeof google.sheets>;

const BRAND_FORM_TYPE = "Brand Review request";
const CREATOR_FORM_TYPE = "Creator Review request";

const BRAND_HEADERS = [
  "Date",
  "Name",
  "Brand / Company",
  "Role",
  "Email",
  "Contact Number",
  "Website / Social Links",
  "Brand Type",
  "Areas To Review",
  "Current Challenges",
  "Strategic Support Interest",
] as const;

const CREATOR_HEADERS = [
  "Date",
  "Name",
  "Creator / Brand",
  "Role / Creator Type",
  "Email",
  "Contact Number",
  "Website / Social Links",
  "Creator Description",
  "Areas To Review",
  "Current Challenges",
  "Strategic Support Interest",
] as const;

const DEFAULT_HEADERS = ["Date", "Form Type", "Submission"] as const;

function stringifyFieldValue(value: unknown): string {
  if (Array.isArray(value)) return value.join(", ");
  if (value === null || value === undefined) return "";
  if (typeof value === "object") return JSON.stringify(value, null, 2);
  return String(value);
}

function readString(fields: Record<string, unknown>, key: string): string {
  return stringifyFieldValue(fields[key]);
}

function readPrivateKey() {
  const key = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
  return key?.replace(/\\n/g, "\n");
}

function getSheetName(formType: string) {
  if (formType === BRAND_FORM_TYPE) {
    return (
      process.env.GOOGLE_SHEETS_BRAND_REVIEW_SHEET_NAME ?? "Brand Review Requests"
    );
  }
  if (formType === CREATOR_FORM_TYPE) {
    return (
      process.env.GOOGLE_SHEETS_CREATOR_REVIEW_SHEET_NAME ??
      "Creator Review Requests"
    );
  }
  return process.env.GOOGLE_SHEETS_DEFAULT_SHEET_NAME ?? "Website Submissions";
}

function getSheetHeaders(formType: string) {
  if (formType === BRAND_FORM_TYPE) return [...BRAND_HEADERS];
  if (formType === CREATOR_FORM_TYPE) return [...CREATOR_HEADERS];
  return [...DEFAULT_HEADERS];
}

function getColumnLetter(columnNumber: number) {
  let letter = "";
  let remaining = columnNumber;

  while (remaining > 0) {
    const remainder = (remaining - 1) % 26;
    letter = String.fromCharCode(65 + remainder) + letter;
    remaining = Math.floor((remaining - 1) / 26);
  }

  return letter;
}

function buildSheetRange(sheetName: string, columnCount: number) {
  const escapedSheetName = sheetName.replace(/'/g, "''");
  return `'${escapedSheetName}'!A:${getColumnLetter(columnCount)}`;
}

function buildHeaderRange(sheetName: string, columnCount: number) {
  const escapedSheetName = sheetName.replace(/'/g, "''");
  return `'${escapedSheetName}'!A1:${getColumnLetter(columnCount)}1`;
}

function rowMatchesHeaders(row: unknown[], headers: string[]) {
  return headers.every((header, index) => String(row[index] ?? "") === header);
}

function rowLooksLikeSubmission(row: unknown[]) {
  const firstCell = String(row[0] ?? "").trim();
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(firstCell);
}

async function findSheetId(
  sheets: SheetsClient,
  spreadsheetId: string,
  sheetName: string,
) {
  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId,
    fields: "sheets(properties(sheetId,title))",
  });
  const sheet = spreadsheet.data.sheets?.find(
    (item) => item.properties?.title === sheetName,
  );
  return sheet?.properties?.sheetId;
}

async function ensureSheetTab({
  sheets,
  spreadsheetId,
  sheetName,
}: {
  sheets: SheetsClient;
  spreadsheetId: string;
  sheetName: string;
}) {
  const existingId = await findSheetId(sheets, spreadsheetId, sheetName);
  if (existingId !== null && existingId !== undefined) return;

  console.log("[form-submissions] creating missing Google Sheet tab", {
    sheetName,
  });

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          addSheet: {
            properties: { title: sheetName },
          },
        },
      ],
    },
  });
}

async function ensureSheetHeaders({
  sheets,
  spreadsheetId,
  sheetName,
  headerRange,
  headers,
}: {
  sheets: SheetsClient;
  spreadsheetId: string;
  sheetName: string;
  headerRange: string;
  headers: string[];
}) {
  const firstRow = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: headerRange,
  });
  const existingHeaders = firstRow.data.values?.[0] ?? [];

  if (rowMatchesHeaders(existingHeaders, headers)) {
    console.log("[form-submissions] Google Sheet headers already synced", {
      sheetName,
      headerRange,
    });
    return;
  }

  if (existingHeaders.length && rowLooksLikeSubmission(existingHeaders)) {
    const sheetId = await findSheetId(sheets, spreadsheetId, sheetName);

    if (sheetId === null || sheetId === undefined) {
      throw new Error(`Sheet tab could not be found: ${sheetName}`);
    }

    console.log("[form-submissions] inserting missing Google Sheet header row", {
      sheetName,
      headerRange,
    });

    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            insertDimension: {
              range: {
                sheetId,
                dimension: "ROWS",
                startIndex: 0,
                endIndex: 1,
              },
              inheritFromBefore: false,
            },
          },
        ],
      },
    });
  }

  console.log("[form-submissions] syncing Google Sheet headers", {
    sheetName,
    headerRange,
  });

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: headerRange,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [headers],
    },
  });
}

function buildSheetRow(formType: string, fields: Record<string, unknown>) {
  const submittedAt = new Date().toISOString();

  if (formType === BRAND_FORM_TYPE) {
    return [
      submittedAt,
      readString(fields, "name"),
      readString(fields, "brand"),
      readString(fields, "role"),
      readString(fields, "email"),
      readString(fields, "contactNumber"),
      readString(fields, "links"),
      readString(fields, "brandType"),
      stringifyFieldValue(fields.reviewAreas),
      stringifyFieldValue(fields.challenges),
      readString(fields, "supportInterest"),
    ];
  }

  if (formType === CREATOR_FORM_TYPE) {
    return [
      submittedAt,
      readString(fields, "name"),
      readString(fields, "brand"),
      readString(fields, "roleType"),
      readString(fields, "email"),
      readString(fields, "contactNumber"),
      readString(fields, "links"),
      readString(fields, "creatorDescription"),
      stringifyFieldValue(fields.reviewAreas),
      stringifyFieldValue(fields.challenges),
      readString(fields, "supportInterest"),
    ];
  }

  return [submittedAt, formType, JSON.stringify(fields, null, 2)];
}

export async function POST(request: Request) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = readPrivateKey();

  if (!spreadsheetId || !clientEmail || !privateKey) {
    console.error("[form-submissions] Google Sheets credentials missing", {
      hasSpreadsheetId: Boolean(spreadsheetId),
      hasClientEmail: Boolean(clientEmail),
      hasPrivateKey: Boolean(privateKey),
    });
    return Response.json(
      { error: "Submission storage is not configured." },
      { status: 500 },
    );
  }

  const payload = (await request.json().catch(() => null)) as
    | SubmissionPayload
    | null;
  if (!payload) {
    console.warn("[form-submissions] rejected invalid JSON");
    return Response.json({ error: "Invalid submission." }, { status: 400 });
  }

  const formType = payload.formType?.trim() || "Website form";
  const fields = payload.fields ?? {};

  if (!Object.keys(fields).length) {
    console.warn("[form-submissions] rejected empty submission", { formType });
    return Response.json({ error: "Submission is empty." }, { status: 400 });
  }

  const sheetName = getSheetName(formType);
  const headers = getSheetHeaders(formType);
  const sheetRange = buildSheetRange(sheetName, headers.length);
  const headerRange = buildHeaderRange(sheetName, headers.length);
  const row = buildSheetRow(formType, fields);

  console.log("[form-submissions] appending submission to Google Sheet", {
    formType,
    spreadsheetId,
    sheetName,
    sheetRange,
    headerRange,
    headers,
    fieldKeys: Object.keys(fields),
  });

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  try {
    await ensureSheetTab({ sheets, spreadsheetId, sheetName });
    await ensureSheetHeaders({
      sheets,
      spreadsheetId,
      sheetName,
      headerRange,
      headers,
    });

    console.log("[form-submissions] Google Sheet headers ready", {
      formType,
      sheetName,
      headerRange,
    });

    const result = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: sheetRange,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [row],
      },
    });

    console.log("[form-submissions] submission appended to Google Sheet", {
      formType,
      sheetName,
      updatedRange: result.data.updates?.updatedRange,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("[form-submissions] Google Sheets append failed", {
      formType,
      sheetName,
      error,
    });
    return Response.json(
      { error: "Submission could not be saved." },
      { status: 502 },
    );
  }
}
