import Link from "next/link";
import { WHATSAPP_URL, PHONE_NUMBER, MAP_URL } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="bg-surface px-6 py-24 sm:py-28 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-primary px-8 py-16 text-on-primary shadow-2xl shadow-primary/15 sm:px-12 sm:py-20 lg:px-16">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-accent-light" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-light">
                Start a conversation
              </p>
            </div>

            <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Need clear legal guidance for your next step?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-on-primary-muted">
              Speak with Sujatha and Associates to discuss your legal matter and
              understand the options available to you.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-full bg-accent-light px-8 py-4 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-surface-strong"
            >
              Book Consultation
              <span aria-hidden="true">→</span>
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-on-primary/30 px-8 py-4 text-sm font-semibold text-on-primary transition duration-300 hover:-translate-y-0.5 hover:border-on-primary hover:bg-surface-strong hover:text-ink"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>

        <div className="relative mt-14 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Phone
            </p>

            <a
              href="tel:+919036931203"
              className="mt-2 block font-semibold text-on-primary transition hover:text-accent-light"
            >
              {PHONE_NUMBER}
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Office
            </p>

            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block font-semibold text-on-primary transition hover:text-accent-light"
            >
              Ullal Main Road, Bangalore
              <span className="ml-2 text-sm text-accent-light">→</span>
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Availability
            </p>

            <p className="mt-2 leading-7 text-white/75">
              Consultations by appointment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
