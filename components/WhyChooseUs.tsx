import Link from "next/link";

const reasons = [
  {
    number: "01",
    title: "Personal Attention",
    description:
      "Every matter is handled with care, discretion and a clear understanding of the client’s priorities.",
  },
  {
    number: "02",
    title: "Clear Legal Guidance",
    description:
      "We explain legal options in straightforward language so clients can make informed decisions.",
  },
  {
    number: "03",
    title: "Strategic Preparation",
    description:
      "Each case is approached with careful preparation, practical judgment and a focused legal strategy.",
  },
  {
    number: "04",
    title: "Responsive Communication",
    description:
      "Clients receive timely updates and clear communication throughout every stage of the matter.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 text-on-primary sm:py-28">
      <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-accent-light" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-light">
              Why choose us
            </p>
          </div>

          <h2 className="mt-7 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
            Thoughtful representation. Practical legal strategy.
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-on-primary-muted">
            We combine careful preparation, clear communication and
            client-focused service to help people move forward with confidence.
          </p>

          <Link
            href="/about"
            className="mt-9 inline-flex items-center gap-3 rounded-full border border-accent-light/60 px-7 py-4 text-sm font-semibold text-on-primary transition duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:text-ink"
          >
            Learn About the Firm
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="group min-h-[280px] bg-primary-raised p-8 transition duration-300 hover:bg-primary sm:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.24em] text-accent-light">
                  {reason.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-accent-light transition duration-300 group-hover:scale-150" />
              </div>

              <h3 className="mt-12 text-2xl font-semibold tracking-[-0.025em]">
                {reason.title}
              </h3>

              <p className="mt-5 leading-7 text-on-primary-muted">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
