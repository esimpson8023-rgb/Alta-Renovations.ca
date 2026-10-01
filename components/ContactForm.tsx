"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { SERVICE_TYPES, BUDGET_RANGES } from "@/lib/data";

interface FormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

type FormErrors = Partial<Record<keyof FormState, string>>;
type SubmitStatus = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9()+\-.\s]{7,}$/;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!PHONE_PATTERN.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.projectType) errors.projectType = "Please select a project type.";

  if (!values.message.trim()) {
    errors.message = "Please tell us a bit about your project.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please provide a few more details (10+ characters).";
  }

  return errors;
}

const inputClasses =
  "w-full rounded-sm border bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-stone-light focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors";

const errorClasses =
  "mt-1.5 flex animate-errorIn items-center gap-1 text-xs text-red-600 opacity-0";

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (
    field: keyof FormState,
    value: string
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setValues(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex animate-successIn flex-col items-center gap-4 rounded-sm border border-accent/30 bg-accent/5 p-10 text-center opacity-0"
      >
        <CheckCircle2
          aria-hidden="true"
          className="h-10 w-10 animate-successIconIn text-accent opacity-0"
        />
        <h3 className="font-display text-2xl text-charcoal">
          Thank you — your request has been received.
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-stone">
          A member of the Alta Renovations team will be in touch soon to
          discuss your project.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-2"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-charcoal">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`${inputClasses} ${errors.name ? "border-red-400" : "border-stone-pale"}`}
            placeholder="Jane Doe"
          />
          {errors.name && (
            <p id="name-error" className={errorClasses}>
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-charcoal">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`${inputClasses} ${errors.email ? "border-red-400" : "border-stone-pale"}`}
            placeholder="jane@example.com"
          />
          {errors.email && (
            <p id="email-error" className={errorClasses}>
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-charcoal">
            Phone <span className="text-accent">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`${inputClasses} ${errors.phone ? "border-red-400" : "border-stone-pale"}`}
            placeholder="(000) 000-0000"
          />
          {errors.phone && (
            <p id="phone-error" className={errorClasses}>
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-charcoal">
            Project Type <span className="text-accent">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            value={values.projectType}
            onChange={(e) => handleChange("projectType", e.target.value)}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? "projectType-error" : undefined}
            className={`${inputClasses} ${errors.projectType ? "border-red-400" : "border-stone-pale"}`}
          >
            <option value="">Select a project type</option>
            {SERVICE_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.projectType && (
            <p id="projectType-error" className={errorClasses}>
              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {errors.projectType}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="budget" className="mb-2 block text-sm font-medium text-charcoal">
          Estimated Budget
        </label>
        <select
          id="budget"
          name="budget"
          value={values.budget}
          onChange={(e) => handleChange("budget", e.target.value)}
          className={`${inputClasses} border-stone-pale`}
        >
          <option value="">Select a budget range (optional)</option>
          {BUDGET_RANGES.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-charcoal">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => handleChange("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClasses} resize-none ${errors.message ? "border-red-400" : "border-stone-pale"}`}
          placeholder="Tell us about your project, timeline, and goals..."
        />
        {errors.message && (
          <p id="message-error" className={errorClasses}>
            <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          Something went wrong sending your request. Please try again, or
          contact us directly using the information provided.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary mt-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" && (
          <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
        )}
        Request My Free Quote
      </button>
    </form>
  );
}
