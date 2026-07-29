import Link from "next/link";
import Logo from "@/components/Logo";
import {
  WHATSAPP_URL,
  PHONE_NUMBER,
  MAP_URL,
  ADDRESS_LINES,
} from "@/lib/constants";

const footerNavigation = [
  { name: "About", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Our Approach", href: "/our-approach" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <Link
            href="/"
            aria-label="Sujatha and Associates home"
            className="inline-flex rounded-2xl p-2"
          >
            <Logo className="h-20 w-auto text-accent-light" />
          </Link>

          <p className="mt-6 max-w-md leading-7 text-on-primary-muted">
            Thoughtful, dependable and client-focused legal representation for
            individuals, families and businesses.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">
            Explore
          </h2>

          <nav className="mt-5 flex flex-col gap-3">
            {footerNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-on-primary-muted transition hover:text-on-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">
            Contact
          </h2>

          <div className="mt-5 space-y-4 text-on-primary-muted">
            <a
              href="tel:+919036931203"
              className="block transition hover:text-on-primary"
            >
              {PHONE_NUMBER}
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-on-primary"
            >
              WhatsApp
            </a>

            <address className="not-italic leading-7">
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-light transition hover:text-on-primary"
            >
              View on Google Maps
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-on-primary-muted/80 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>
            © {new Date().getFullYear()} Sujatha and Associates. All rights
            reserved.
          </p>

          <p>Website information does not constitute legal advice.</p>
        </div>
      </div>
    </footer>
  );
}
