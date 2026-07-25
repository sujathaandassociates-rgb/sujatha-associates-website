"use client";

import { FormEvent, useState } from "react";
import {
  WHATSAPP_URL,
  MAP_URL,
  ADDRESS_LINES,
} from "@/lib/constants";

const legalMatters = [
  "Civil Litigation",
  "Criminal Law",
  "Property Law",
  "Family Law",
  "Corporate Law",
  "Consumer Law",
  "Other Legal Matter",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("fullName"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          practiceArea: formData.get("legalMatter"),
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Unable to submit. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[#f8f5ef] text-[#14342f]">
        <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-[#b78a35]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#14342f]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-28">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b78a35]">
              Request a consultation
            </p>

            <h1 className="mt-7 text-5xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Tell us how we may assist you.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#14342f]/65">
              Share a few details about your legal matter. Our office will
              review your enquiry and contact you regarding the appropriate
              next step.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 text-[#14342f] sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
          <div className="rounded-[2rem] border border-[#14342f]/10 bg-white p-6 shadow-2xl shadow-[#14342f]/5 sm:p-10">
            <div className="mb-10 flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b78a35]">
                  Client enquiry
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Consultation request form
                </h2>
              </div>

              <div className="hidden rounded-full border border-[#14342f]/10 bg-[#f8f5ef] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#14342f]/55 sm:block">
                Confidential
              </div>
            </div>

            <p className="mb-8 max-w-2xl leading-7 text-[#14342f]/60">
              Please avoid including highly confidential, sensitive, or
              time-critical information in this initial enquiry.
            </p>

            {error && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            {submitted ? (
              <div
                role="status"
                className="rounded-3xl border border-[#b78a35]/25 bg-[#f8f5ef] p-8 sm:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#14342f] text-white">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#b78a35]">
                  Submission received
                </p>

                <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                  Your consultation request has been submitted.
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-[#14342f]/65">
                  Our team will review your enquiry and contact you regarding
                  the appropriate next step. For immediate assistance, please
                  call or contact the office through WhatsApp.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      const form = document.querySelector("form");
                      if (form) form.reset();
                    }}
                    className="rounded-full border border-[#14342f]/20 px-6 py-3 text-sm font-semibold transition hover:border-[#14342f] hover:bg-white"
                  >
                    Submit another enquiry
                  </button>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#25D366] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#1ebe5d]"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField label="Full name" htmlFor="fullName">
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      className="form-input"
                      placeholder="Your full name"
                    />
                  </FormField>

                  <FormField label="Phone number" htmlFor="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      required
                      className="form-input"
                      placeholder="+91 90369 31203"
                    />
                  </FormField>
                </div>

                <FormField label="Email address" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="form-input"
                    placeholder="you@example.com"
                  />
                </FormField>

                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField label="Type of legal matter" htmlFor="legalMatter">
                    <select
                      id="legalMatter"
                      name="legalMatter"
                      required
                      defaultValue=""
                      className="form-input"
                    >
                      <option value="" disabled>
                        Select a practice area
                      </option>

                      {legalMatters.map((matter) => (
                        <option key={matter} value={matter}>
                          {matter}
                        </option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="Preferred date" htmlFor="preferredDate">
                    <input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      className="form-input"
                    />
                  </FormField>
                </div>

                <FormField
                  label="Brief description of your matter"
                  htmlFor="message"
                >
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    required
                    className="form-input resize-none"
                    placeholder="Please provide a brief summary of the assistance you require."
                  />
                </FormField>

                <label className="flex items-start gap-3 rounded-2xl border border-[#14342f]/10 bg-[#f8f5ef] p-4 text-sm leading-6 text-[#14342f]/65">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-1 h-4 w-4 shrink-0 accent-[#14342f]"
                  />

                  <span>
                    I understand that submitting this form does not create a
                    lawyer-client relationship and does not guarantee
                    representation.
                  </span>
                </label>

                <div className="flex flex-col gap-4 border-t border-[#14342f]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm leading-6 text-[#14342f]/45">
                    Required fields must be completed before submission.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center rounded-full bg-[#14342f] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#b78a35] disabled:opacity-60"
                  >
                    {loading ? "Submitting..." : "Submit Consultation Request"}
                  </button>
                </div>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-[#14342f] p-8 text-white shadow-2xl shadow-[#14342f]/10 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d6b56c]">
                Direct contact
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Speak with our office.
              </h2>

              <p className="mt-4 leading-7 text-white/60">
                For urgent or immediate enquiries, please contact the office
                directly.
              </p>

              <div className="mt-9 divide-y divide-white/10">
                <div className="pb-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Telephone
                  </p>

                  <a
                    href="tel:+919036931203"
                    className="mt-2 block text-xl font-semibold transition hover:text-[#d6b56c]"
                  >
                    +91 90369 31203
                  </a>
                </div>

                <div className="py-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Office address
                  </p>

                  <address className="mt-2 not-italic leading-7 text-white/70">
                    {ADDRESS_LINES.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < ADDRESS_LINES.length - 1 && <br />}
                      </span>
                    ))}
                  </address>

                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#d6b56c] transition hover:text-white"
                  >
                    View on Google Maps
                    <span aria-hidden="true">→</span>
                  </a>
                </div>

                <div className="pt-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Availability
                  </p>

                  <p className="mt-2 leading-7 text-white/70">
                    Consultations are scheduled by appointment.
                  </p>
                </div>
              </div>

              <div className="mt-9 flex flex-col gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
                >
                  Message on WhatsApp
                </a>

                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-semibold transition hover:border-white/40 hover:bg-white/5"
                >
                  View Office Location
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#14342f]/10 bg-[#f8f5ef] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b78a35]">
                Important notice
              </p>

              <p className="mt-5 leading-7 text-[#14342f]/65">
                Sending an enquiry does not guarantee representation. A
                lawyer-client relationship begins only after the firm confirms
                the engagement in writing.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#14342f]/10 bg-white p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b78a35]">
                What happens next
              </p>

              <ol className="mt-6 space-y-5">
                <Step number="01" text="Your enquiry is reviewed by the office." />
                <Step number="02" text="A team member contacts you regarding availability." />
                <Step number="03" text="A consultation is scheduled when appropriate." />
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-semibold text-[#14342f]"
      >
        {label}
      </label>

      {children}
    </div>
  );
}

function Step({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <li className="flex gap-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#14342f] text-xs font-semibold text-white">
        {number}
      </span>

      <p className="pt-1 leading-7 text-[#14342f]/65">{text}</p>
    </li>
  );
}
