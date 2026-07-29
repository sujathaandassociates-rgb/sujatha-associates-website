import Link from "next/link";
import Logo from "@/components/Logo";
import {
  WHATSAPP_URL,
  PHONE_NUMBER,
  MAP_URL,
  ADDRESS_LINES,
} from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface text-ink">
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:py-24">
        <div>
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-accent" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-strong">
              Trusted legal representation
            </p>
          </div>

          <h1 className="mt-8 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl xl:text-[5.3rem]">
            Legal counsel
            <br />
            built on
            <br />
            <span className="font-serif font-normal italic text-accent-strong">
              integrity
            </span>{" "}
            and
            <br />
            experience.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
            Sujatha and Associates provides thoughtful, dependable and
            client-focused legal representation for individuals, families and
            businesses.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-on-primary shadow-lg shadow-primary/15 transition duration-300 hover:-translate-y-0.5 hover:bg-primary-raised"
            >
              Book Consultation
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/practice-areas"
              className="inline-flex items-center justify-center rounded-full border border-primary/30 px-8 py-4 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-surface-strong"
            >
              Explore Practice Areas
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-accent/35 bg-primary p-8 text-on-primary shadow-2xl shadow-primary/25 sm:p-10">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

            <div className="relative">
              <div className="flex justify-center px-2 pt-1">
                <Logo className="max-w-[300px] text-accent-light" />
              </div>

              <div className="mt-10 divide-y divide-white/15 border-y border-white/15">
                <ContactRow
                  label="Call Us"
                  value={PHONE_NUMBER}
                  href="tel:+919036931203"
                  icon={<PhoneIcon />}
                />

                <ContactRow
                  label="WhatsApp Us"
                  value={PHONE_NUMBER}
                  href={WHATSAPP_URL}
                  external
                  icon={<WhatsAppIcon />}
                />

                <div className="flex gap-4 py-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent-light">
                    <LocationIcon />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Visit Our Office
                    </p>

                    <address className="mt-2 not-italic leading-7 text-white/85">
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
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-light transition hover:text-on-primary"
                    >
                      View on Google Maps
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-accent-light px-6 py-4 text-sm font-semibold text-ink transition duration-300 hover:bg-surface-strong"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
  icon,
  external = false,
}: {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 py-6"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent-light transition group-hover:bg-accent-light group-hover:text-ink">
        {icon}
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-white/60">
          {label}
        </p>

        <p className="mt-1 text-lg font-semibold text-white">{value}</p>
      </div>
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
    >
      <path d="M6.62 10.79a15.5 15.5 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.3 11.3 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.19 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="h-6 w-6 fill-current"
    >
      <path d="M16.04 3C8.86 3 3.02 8.84 3.02 16c0 2.29.6 4.52 1.74 6.48L3 29l6.69-1.75A13 13 0 1 0 16.04 3Zm0 23.63c-2.08 0-4.12-.56-5.9-1.62l-.42-.25-3.97 1.04 1.06-3.86-.27-.44A10.57 10.57 0 1 1 16.04 26.63Zm5.8-7.91c-.32-.16-1.88-.93-2.17-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57a9.55 9.55 0 0 1-1.77-2.2c-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-current"
    >
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    </svg>
  );
}
