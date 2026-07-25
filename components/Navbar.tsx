"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        hasScrolled
          ? "border-[#14342f]/10 bg-[#f8f5ef]/85 shadow-[0_10px_35px_rgba(20,52,47,0.08)] backdrop-blur-2xl"
          : "border-transparent bg-[#f8f5ef]"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:px-10 ${
          hasScrolled ? "h-16" : "h-20"
        }`}
      >
        <Link
          href="/"
          aria-label="Sujatha and Associates home"
          className="relative z-50 flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/sujatha-logo.png"
            alt="Sujatha and Associates"
            width={190}
            height={76}
            priority
            className={`w-auto object-contain transition-all duration-300 ${
              hasScrolled ? "h-11" : "h-14"
            }`}
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {navigation.map((item) => {
            const active = isActiveRoute(pathname, item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative py-2 text-sm font-medium transition-colors duration-300 ${
                  active
                    ? "text-[#9a712b]"
                    : "text-[#294943] hover:text-[#14342f]"
                }`}
              >
                {item.name}

                <span
                  className={`absolute inset-x-0 -bottom-1 mx-auto h-px bg-[#b78a35] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#14342f] px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#9a712b] hover:shadow-lg"
          >
            Book Consultation
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#14342f]/15 bg-white/40 text-[#14342f] transition duration-300 hover:border-[#14342f]/35 hover:bg-white lg:hidden"
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>

          <div className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-[4px] h-[1.5px] w-5 bg-current transition-all duration-300 ${
                isMenuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[10px] h-[1.5px] w-5 bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute left-0 top-[16px] h-[1.5px] w-5 bg-current transition-all duration-300 ${
                isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#14342f]/10 bg-[#f8f5ef]/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto flex h-full max-w-7xl flex-col px-6 py-8">
              <div className="flex flex-col">
                {navigation.map((item, index) => {
                  const active = isActiveRoute(pathname, item.href);

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.05,
                      }}
                    >
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center justify-between border-b border-[#14342f]/10 py-5 text-xl font-medium transition-colors ${
                          active
                            ? "text-[#9a712b]"
                            : "text-[#14342f] hover:text-[#9a712b]"
                        }`}
                      >
                        {item.name}

                        <span
                          aria-hidden="true"
                          className={`text-base ${
                            active ? "text-[#9a712b]" : "text-[#14342f]/35"
                          }`}
                        >
                          →
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mt-auto pb-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#14342f] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#9a712b]"
                >
                  Book Consultation
                  <span aria-hidden="true">→</span>
                </Link>

                <a
                  href="tel:+919036931203"
                  className="mt-5 block text-center text-sm font-medium text-[#14342f]/65"
                >
                  +91 90369 31203
                </a>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}