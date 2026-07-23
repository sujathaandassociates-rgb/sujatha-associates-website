"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Our Approach", href: "/our-approach" },
  { name: "Contact", href: "/contact" },
];

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#14342f]/10 bg-[#f8f5ef]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          aria-label="Sujatha and Associates home"
          className="flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/sujatha-logo.png"
            alt="Sujatha and Associates"
            width={190}
            height={76}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navigation.map((item) => {
            const active = isActiveRoute(pathname, item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-sm font-medium transition ${
                  active
                    ? "text-[#b78a35]"
                    : "text-[#14342f]/70 hover:text-[#14342f]"
                }`}
              >
                {item.name}

                <span
                  className={`absolute inset-x-0 -bottom-1 mx-auto h-0.5 bg-[#b78a35] transition-all ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#14342f] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#b78a35]"
          >
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#14342f]/15 text-[#14342f] transition hover:border-[#14342f]/40 lg:hidden"
        >
          {isMenuOpen ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[#14342f]/10 bg-[#f8f5ef] px-6 py-6 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigation.map((item) => {
              const active = isActiveRoute(pathname, item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={`border-b border-[#14342f]/10 py-4 text-base font-medium transition ${
                    active
                      ? "text-[#b78a35]"
                      : "text-[#14342f]/75 hover:text-[#14342f]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#14342f] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#b78a35]"
            >
              Book Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}