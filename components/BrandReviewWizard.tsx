"use client";

import { useCallback, useMemo, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

const brandTypeOptions = [
  "Small Business",
  "Growing Brand",
  "Established Company",
  "E-commerce Brand",
  "Other",
] as const;

const reviewAreaOptions = [
  "Messaging Clarity",
  "Online Presence",
  "Customer Response",
  "Overall Communication",
] as const;

const challengeOptions = [
  "Low customer inquiries",
  "Weak customer response",
  "Customers not taking action",
  "Difficulty explaining the offer clearly",
  "Low engagement online",
  "Other",
] as const;

const supportInterestOptions = [
  "Yes",
  "Possibly",
  "Not at the moment",
] as const;

type BrandReviewRequest = {
  name: string;
  brand: string;
  role: string;
  email: string;
  phone: string;
  links: string;
  brandType: string;
  reviewAreas: string[];
  challenges: string[];
  supportInterest: string;
};

const emptyRequest: BrandReviewRequest = {
  name: "",
  brand: "",
  role: "",
  email: "",
  phone: "",
  links: "",
  brandType: "",
  reviewAreas: [],
  challenges: [],
  supportInterest: "",
};

const inputClass =
  "mt-3 w-full bg-raka-surfaceHighest p-4 text-sm text-raka-onSurface placeholder:text-raka-onSurfaceMuted/50 focus:outline-none focus:ring-1 focus:ring-raka-primaryContainer";

function CheckboxGroup({
  options,
  selected,
  onToggle,
}: {
  options: readonly string[];
  selected: string[];
  onToggle: (option: string) => void;
}) {
  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {options.map((option) => {
        const checked = selected.includes(option);
        return (
          <label
            key={option}
            className={`flex cursor-pointer items-center gap-3 bg-raka-surfaceHighest p-4 text-sm transition-colors ${
              checked
                ? "text-raka-onSurface ring-1 ring-raka-primaryContainer"
                : "text-raka-onSurfaceMuted hover:text-raka-onSurface"
            }`}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={() => onToggle(option)}
              className="h-4 w-4 accent-raka-primaryContainer"
            />
            {option}
          </label>
        );
      })}
    </div>
  );
}

export function BrandReviewWizard() {
  const [request, setRequest] = useState<BrandReviewRequest>(emptyRequest);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const toggleListValue = useCallback(
    (key: "reviewAreas" | "challenges", option: string) => {
      setRequest((current) => {
        const list = current[key];
        const next = list.includes(option)
          ? list.filter((item) => item !== option)
          : [...list, option];
        return { ...current, [key]: next };
      });
    },
    [],
  );

  const questions = useMemo(
    () => [
      {
        label: "Name",
        helper: "Who should we contact about this review?",
        isComplete: request.name.trim().length > 0,
        field: (
          <input
            type="text"
            value={request.name}
            onChange={(e) =>
              setRequest((current) => ({ ...current, name: e.target.value }))
            }
            className={inputClass}
            placeholder="Your name"
            required
          />
        ),
      },
      {
        label: "Brand / Company name",
        helper: "Add the brand or company being reviewed.",
        isComplete: request.brand.trim().length > 0,
        field: (
          <input
            type="text"
            value={request.brand}
            onChange={(e) =>
              setRequest((current) => ({ ...current, brand: e.target.value }))
            }
            className={inputClass}
            placeholder="Brand or company name"
            required
          />
        ),
      },
      {
        label: "Role",
        helper: "Add your role so the follow-up can be tailored.",
        isComplete: request.role.trim().length > 0,
        field: (
          <input
            type="text"
            value={request.role}
            onChange={(e) =>
              setRequest((current) => ({ ...current, role: e.target.value }))
            }
            className={inputClass}
            placeholder="Your role"
            required
          />
        ),
      },
      {
        label: "Email address",
        helper: "We will send next steps and review materials here.",
        isComplete: request.email.trim().length > 0,
        field: (
          <input
            type="email"
            value={request.email}
            onChange={(e) =>
              setRequest((current) => ({ ...current, email: e.target.value }))
            }
            className={inputClass}
            placeholder="you@brand.com"
            required
          />
        ),
      },
      {
        label: "Contact number",
        helper:
          "+61 is Australia's country code. If you're outside Australia, include your full international number with country code.",
        isComplete: request.phone.trim().length > 0,
        field: (
          <input
            type="tel"
            value={request.phone}
            onChange={(e) =>
              setRequest((current) => ({ ...current, phone: e.target.value }))
            }
            className={inputClass}
            placeholder="+61 000 000 000"
            required
          />
        ),
      },
      {
        label: "Website or social media links",
        helper:
          "Share the pages we can review — your website, Instagram, Facebook, TikTok, LinkedIn, etc.",
        isComplete: request.links.trim().length > 0,
        field: (
          <textarea
            value={request.links}
            onChange={(e) =>
              setRequest((current) => ({ ...current, links: e.target.value }))
            }
            className={`${inputClass} min-h-32`}
            placeholder={"https://yourbrand.com\nhttps://instagram.com/yourbrand"}
            required
          />
        ),
      },
      {
        label: "What best describes your brand or company?",
        helper: "Choose the closest match.",
        isComplete: request.brandType.trim().length > 0,
        field: (
          <select
            value={request.brandType}
            onChange={(e) =>
              setRequest((current) => ({
                ...current,
                brandType: e.target.value,
              }))
            }
            className={inputClass}
            required
          >
            <option value="">Select one</option>
            {brandTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ),
      },
      {
        label: "What would you like reviewed?",
        helper: "Select all that apply.",
        isComplete: request.reviewAreas.length > 0,
        field: (
          <CheckboxGroup
            options={reviewAreaOptions}
            selected={request.reviewAreas}
            onToggle={(option) => toggleListValue("reviewAreas", option)}
          />
        ),
      },
      {
        label: "What challenges are you currently experiencing?",
        helper: "Select all that apply.",
        isComplete: request.challenges.length > 0,
        field: (
          <CheckboxGroup
            options={challengeOptions}
            selected={request.challenges}
            onToggle={(option) => toggleListValue("challenges", option)}
          />
        ),
      },
      {
        label: "Are you interested in strategic support after the review?",
        helper: "This helps shape the type of follow-up we send.",
        isComplete: request.supportInterest.trim().length > 0,
        field: (
          <select
            value={request.supportInterest}
            onChange={(e) =>
              setRequest((current) => ({
                ...current,
                supportInterest: e.target.value,
              }))
            }
            className={inputClass}
            required
          >
            <option value="">Select one</option>
            {supportInterestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ),
      },
    ],
    [request, toggleListValue],
  );

  const currentQuestion = questions[step];
  const isLastStep = step === questions.length - 1;

  const submit = useCallback(async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    console.log("[BrandReviewWizard] submitting brand review request", {
      recipient: CONTACT_EMAIL,
      email: request.email,
      brandType: request.brandType,
      reviewAreas: request.reviewAreas,
      challenges: request.challenges,
      supportInterest: request.supportInterest,
    });

    try {
      const response = await fetch("/api/form-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Brand Review request",
          fields: {
            name: request.name,
            brand: request.brand,
            role: request.role,
            email: request.email,
            contactNumber: request.phone,
            links: request.links,
            brandType: request.brandType,
            reviewAreas: request.reviewAreas,
            challenges: request.challenges,
            supportInterest: request.supportInterest,
          },
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error ?? "Unable to send the review request.");
      }

      console.log("[BrandReviewWizard] brand review request saved", {
        email: request.email,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("[BrandReviewWizard] brand review request failed", {
        error,
      });
      setSubmitError(
        "Sorry, your request could not be saved. Please try again in a moment.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }, [request]);

  const goNext = useCallback(async () => {
    console.log("[BrandReviewWizard] advancing step", {
      from: step,
      to: step + 1,
      label: currentQuestion.label,
    });

    if (isLastStep) {
      await submit();
      return;
    }

    setStep((current) => current + 1);
  }, [currentQuestion.label, isLastStep, step, submit]);

  if (submitted) {
    return (
      <div className="bg-raka-surfaceContainer p-8 shadow-2xl md:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-raka-primaryContainer">
          Request received
        </p>
        <h2 className="mt-4 font-display text-3xl font-extrabold uppercase text-white md:text-5xl">
          Thank you for requesting a review.
        </h2>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-neutral-300">
          <p>
            Your answers were saved successfully. This page is your automatic
            confirmation that we received your request.
          </p>
          <p>
            We&apos;ll follow up at the email you provided with next steps and
            timing.
          </p>
        </div>
      </div>
    );
  }

  const totalSteps = questions.length;
  const stepNumber = step + 1;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void goNext();
      }}
      className="bg-raka-surfaceContainer p-8 shadow-2xl md:p-12"
    >
      <div className="mb-10 flex items-center justify-between gap-6">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-raka-primaryContainer">
          Brand review
        </p>
        <p className="text-xs text-raka-onSurfaceMuted">
          Step {stepNumber} of {totalSteps}
        </p>
      </div>

      <label>
        <span className="font-display text-2xl font-extrabold uppercase leading-tight text-white md:text-4xl">
          {currentQuestion.label}
        </span>
        <span className="mt-4 block max-w-2xl text-sm leading-relaxed text-raka-onSurfaceMuted">
          {currentQuestion.helper}
        </span>
        {currentQuestion.field}
      </label>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={() => {
            console.log("[BrandReviewWizard] returning step", {
              from: step,
              to: step - 1,
            });
            setStep((current) => Math.max(0, current - 1));
          }}
          disabled={step === 0}
          className="px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-raka-onSurfaceMuted transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={!currentQuestion.isComplete || isSubmitting}
          className="clinical-gradient px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isSubmitting
            ? "Saving..."
            : isLastStep
              ? "Submit request"
              : "Next question"}
        </button>
      </div>
      {submitError ? (
        <p className="mt-6 text-sm leading-relaxed text-raka-primary">
          {submitError}
        </p>
      ) : null}
    </form>
  );
}
