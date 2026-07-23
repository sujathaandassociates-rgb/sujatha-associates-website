import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f0e4] text-[#173027]">
      <Navbar />

      <section className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a67b32]">
            Trusted legal representation
          </p>

          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Legal counsel built on{" "}
            <span className="italic text-[#a67b32]">integrity</span> and
            experience.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#173027]/70">
            Sujatha and Associates provides thoughtful, dependable, and
            client-focused legal representation for individuals, families,
            and businesses.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#173027] px-8 py-4 text-center text-sm font-semibold text-white"
            >
              Book Consultation
            </Link>

            <Link
              href="/practice-areas"
              className="rounded-full border border-[#a67b32] px-8 py-4 text-center text-sm font-semibold"
            >
              Explore Practice Areas
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-[#173027] p-8 text-white shadow-xl">
          <div className="flex justify-center">
            <Image
              src="/sujatha-logo.png"
              alt="Sujatha and Associates"
              width={420}
              height={360}
              priority
              className="h-auto w-full max-w-[340px] object-contain"
            />
          </div>

          <div className="mt-8 border-t border-white/15 pt-6">
            <a
              href="tel:+919036931203"
              className="block text-lg text-white"
            >
              Call: +91 90369 31203
            </a>

            <a
              href="https://wa.me/919036931203?text=Hello%2C%20I%20would%20like%20to%20book%20a%20legal%20consultation%20with%20Sujatha%20and%20Associates."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-lg text-[#d7b66d]"
            >
              WhatsApp: 9036931203
            </a>

            <address className="mt-5 not-italic leading-7 text-white/70">
              No. 320/58, 1st Floor,
              <br />
              6th Cross, Muneshwara Nagar,
              <br />
              Ullal Main Road,
              <br />
              Bangalore - 560056
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}