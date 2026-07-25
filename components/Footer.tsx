import Image from "next/image";
import Link from "next/link";
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
    <footer className="bg-[#14342f] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <Link
            href="/"
            aria-label="Sujatha and Associates home"
            className="inline-flex rounded-2xl p-2"
          >
            <Image
              src="/sujatha-logo.png"
              alt="Sujatha and Associates"
              width={210}
              height={90}
              className="h-16 w-auto object-contain brightness-0 invert"
            />
          </Link>

          <p className="mt-6 max-w-md leading-7 text-white/65">
            Thoughtful, dependable and client-focused legal representation for
            individuals, families and businesses.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6b56c]">
            Explore
          </h2>

          <nav className="mt-5 flex flex-col gap-3">
            {footerNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/70 transition hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6b56c]">
            Contact
          </h2>

          <div className="mt-5 space-y-4 text-white/70">
            <a
              href="tel:+919036931203"
              className="block transition hover:text-white"
            >
              {PHONE_NUMBER}
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-white"
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#d6b56c] transition hover:text-white"
            >
              View on Google Maps
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>
            © {new Date().getFullYear()} Sujatha and Associates. All rights
            reserved.
          </p>

          <p>
            Website information does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
