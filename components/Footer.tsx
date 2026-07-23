import Image from "next/image";
import Link from "next/link";

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
            className="inline-flex rounded-2xl bg-[#f8f5ef] p-4"
          >
            <Image
              src="/sujatha-logo.png"
              alt="Sujatha and Associates"
              width={210}
              height={90}
              className="h-16 w-auto object-contain"
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
              +91 90369 31203
            </a>

            <a
              href="https://wa.me/919036931203?text=Hello%2C%20I%20would%20like%20to%20book%20a%20legal%20consultation%20with%20Sujatha%20and%20Associates."
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-white"
            >
              WhatsApp
            </a>

            <address className="not-italic leading-7">
              No. 320/58, 1st Floor,
              <br />
              6th Cross, Muneshwara Nagar,
              <br />
              Ullal Main Road,
              <br />
              Bangalore – 560056
            </address>
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