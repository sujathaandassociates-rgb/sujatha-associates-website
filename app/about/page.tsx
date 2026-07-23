import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Integrity",
    description:
      "We provide honest assessments, responsible advice, and transparent communication throughout every legal matter.",
  },
  {
    number: "02",
    title: "Preparation",
    description:
      "Every case is approached with careful research, disciplined preparation, and close attention to detail.",
  },
  {
    number: "03",
    title: "Client Focus",
    description:
      "We take time to understand each client’s concerns, priorities, and desired outcome before recommending a strategy.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[#14342f]/10 bg-[#f8f5ef]">
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-12 bg-[#b78a35]" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b78a35]">
                About our firm
              </p>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#14342f] sm:text-6xl lg:text-7xl">
              Thoughtful legal representation built around{" "}
              <span className="italic text-[#b78a35]">people</span>.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#14342f]/65">
              Sujatha and Associates is committed to providing clear,
              responsible and client-focused legal support across a broad range
              of legal matters.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#14342f] p-8 text-white shadow-2xl shadow-[#14342f]/15 sm:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-[#d6b56c]">
              Our philosophy
            </p>

            <blockquote className="mt-12 text-3xl leading-relaxed">
              “Good legal representation begins with listening carefully,
              understanding the facts and giving honest guidance.”
            </blockquote>

            <div className="mt-12 border-t border-white/15 pt-6">
              <p className="text-sm text-white/55">
                Sujatha and Associates
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b78a35]">
              Who we are
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#14342f] sm:text-5xl">
              A legal practice grounded in clarity and professional
              responsibility.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#14342f]/65">
            <p>
              Our approach is based on understanding the client’s situation,
              identifying the most important legal and practical issues and
              developing a focused course of action.
            </p>

            <p>
              We assist individuals, families and businesses with civil,
              criminal, property, family, corporate and consumer-related
              matters. Each engagement is handled with preparation,
              confidentiality and close attention to the client’s objectives.
            </p>

            <p>
              We believe clients should understand their legal options. Our
              role is not only to represent them, but also to explain the
              process, risks and possible next steps in clear language.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ef] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b78a35]">
              Our values
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#14342f] sm:text-5xl">
              The principles that guide our work.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[#14342f]/10 bg-[#14342f]/10 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="bg-[#f8f5ef] p-9 sm:p-10">
                <p className="text-xs tracking-[0.25em] text-[#b78a35]">
                  {value.number}
                </p>

                <h3 className="mt-14 text-3xl font-semibold text-[#14342f]">
                  {value.title}
                </h3>

                <p className="mt-5 leading-7 text-[#14342f]/65">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#14342f] py-24 text-white sm:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d6b56c]">
            Start a conversation
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-6xl">
            Speak with our team about your legal matter.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Contact the office to request a consultation and discuss the next
            appropriate step.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-[#d6b56c] px-8 py-4 text-sm font-semibold text-[#14342f] transition hover:bg-white"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}