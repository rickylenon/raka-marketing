import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "Communication clarity, structure, and response strategy for brands and creators. RAKA Marketing — where clarity drives response.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "RAKA Marketing | Where clarity drives response.",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "RAKA Marketing | Where clarity drives response.",
    description,
    url: "/",
    siteName: "RAKA Marketing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAKA Marketing",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} overflow-x-clip`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=block"
        />
      </head>
      <body className="min-h-screen overflow-x-clip bg-raka-bg font-sans text-raka-onSurface antialiased selection:bg-raka-primaryContainer selection:text-white">
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
