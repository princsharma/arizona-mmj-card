"use client";

import { useState, type FormEvent } from "react";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  agreeTerms: boolean;
  marketingOptIn: boolean;
};

type Errors = Partial<Record<"fullName" | "email" | "phone" | "agreeTerms", string>>;

const initial: FormState = {
  fullName: "",
  email: "",
  phone: "",
  agreeTerms: false,
  marketingOptIn: false,
};

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.fullName.trim() || values.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 10) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!values.agreeTerms) {
    errors.agreeTerms = "You must agree to the Terms & Conditions.";
  }
  return errors;
}

export default function HeroForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key as keyof Errors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key as keyof Errors];
        return next;
      });
    }
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const payload = {
      fullName: values.fullName.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      agreeTerms: values.agreeTerms,
      marketingOptIn: values.marketingOptIn,
      submittedAt: new Date().toISOString(),
    };
    console.log("Application form submitted:", payload);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <form className="hero-form" noValidate>
        <div className="hf-success">
          <div className="hf-success-icon">
            <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
          </div>
          <h3>Application Started!</h3>
          <p>
            A licensed Arizona physician will contact you within 24 hours to
            schedule your evaluation.
          </p>
        </div>
      </form>
    );
  }

  return (
    <form className="hero-form" onSubmit={onSubmit} noValidate>
      <div className="hf-fields">
        <span className="eyebrow">
          <i className="fa-solid fa-circle-check" aria-hidden="true"></i> Get
          Started
        </span>
        <h2 className="hf-title">Get Started Today</h2>
        <p className="hf-sub">
          Begin your evaluation by completing the form below.
        </p>

        <div className={`hf-field${errors.fullName ? " has-error" : ""}`}>
          <label htmlFor="hf-fullName">
            <i className="fa-regular fa-user" aria-hidden="true"></i>
            Full Name <span className="req">*</span>
          </label>
          <input
            id="hf-fullName"
            type="text"
            autoComplete="name"
            placeholder="John Doe"
            value={values.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "hf-fullName-error" : undefined}
          />
          {errors.fullName && (
            <p id="hf-fullName-error" role="alert" className="hf-error">
              {errors.fullName}
            </p>
          )}
        </div>

        <div className={`hf-field${errors.email ? " has-error" : ""}`}>
          <label htmlFor="hf-email">
            <i className="fa-regular fa-envelope" aria-hidden="true"></i>
            Email Address <span className="req">*</span>
          </label>
          <input
            id="hf-email"
            type="email"
            autoComplete="email"
            placeholder="john@example.com"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "hf-email-error" : undefined}
          />
          {errors.email && (
            <p id="hf-email-error" role="alert" className="hf-error">
              {errors.email}
            </p>
          )}
        </div>

        <div className={`hf-field${errors.phone ? " has-error" : ""}`}>
          <label htmlFor="hf-phone">
            <i className="fa-solid fa-phone" aria-hidden="true"></i>
            Phone Number <span className="req">*</span>
          </label>
          <input
            id="hf-phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 123-4567"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "hf-phone-error" : undefined}
          />
          {errors.phone && (
            <p id="hf-phone-error" role="alert" className="hf-error">
              {errors.phone}
            </p>
          )}
        </div>

        <label className={`hf-check${errors.agreeTerms ? " has-error" : ""}`}>
          <input
            type="checkbox"
            checked={values.agreeTerms}
            onChange={(e) => update("agreeTerms", e.target.checked)}
            aria-invalid={Boolean(errors.agreeTerms)}
          />
          <span>
            I agree to the <a href="#">Terms &amp; Conditions</a>
          </span>
        </label>
        {errors.agreeTerms && (
          <p role="alert" className="hf-error" style={{ marginLeft: 26 }}>
            {errors.agreeTerms}
          </p>
        )}

        <label className="hf-check">
          <input
            type="checkbox"
            checked={values.marketingOptIn}
            onChange={(e) => update("marketingOptIn", e.target.checked)}
          />
          <span>Send me updates and special offers</span>
        </label>

        <button type="submit" className="hf-submit">
          Continue to Next Step{" "}
          <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </button>

        <p className="hf-note">
          <i className="fa-solid fa-shield-halved" aria-hidden="true"></i> Your
          information is encrypted and HIPAA compliant
        </p>
      </div>
    </form>
  );
}
