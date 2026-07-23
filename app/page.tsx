import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="overflow-hidden bg-[#f8f5ef]">
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b78a35]">
              Advocates & Legal Consultants
            </p>

            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#14342f] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
              Clear legal guidance for life&apos;s most important decisions.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#14342f]/65 sm:text-xl">
              Sujatha and Associates provides thoughtful, dependable and
              client-focused legal representation for individuals, families
              and businesses.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#14342f] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#b78a35]"
              >
                Book Consultation
              </Link>

              <Link
                href="/practice-areas"
                className="inline-flex items-center justify-center rounded-full border border-[#14342f]/20 px-8 py-4 text-sm font-semibold text-[#14342f] transition duration-300 hover:border-[#14342f] hover:bg-white"
              >
                Explore Practice Areas
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#b78a35]/15 blur-3xl" />
            <div className="absolute -right-12 bottom-10 h-56 w-56 rounded-full bg-[#14342f]/15 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] bg-[#14342f] p-8 shadow-2xl shadow-[#14342f]/15 sm:p-12">
              <div className="rounded-[1.5rem] bg-[#f8f5ef] p-8">
                <Image
                  src="/sujatha-logo.png"
                  alt="Sujatha and Associates"
                  width={500}
                  height={400}
                  priority
                  className="mx-auto h-auto w-full max-w-[360px] object-contain"
                />
              </div>

              <div className="mt-8 grid gap-5 border-t border-white/15 pt-8 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#d6b56c]">
                    Call us
                  </p>

                  <a
                    href="tel:+919036931203"
                    className="mt-2 block text-lg font-medium text-white"
                  >
                    +91 90369 31203
                  </a>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#d6b56c]">
                    Location
                  </p>

                  <p className="mt-2 leading-7 text-white/70">
                    Ullal Main Road,
                    <br />
                    Bangalore – 560056
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b78a35]">
            Our commitment
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-semibold tracking-[-0.03em] text-[#14342f] sm:text-5xl">
            Legal representation grounded in clarity, preparation and trust.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#14342f]/60">
            Every legal matter deserves careful attention, straightforward
            communication and a strategy tailored to the client&apos;s needs.
          </p>

          <Link
            href="/about"
            className="mt-9 inline-flex text-sm font-semibold text-[#14342f] underline decoration-[#b78a35] decoration-2 underline-offset-8"
          >
            Learn more about the firm
          </Link>
        </div>
      </section>
    </>
  );
}