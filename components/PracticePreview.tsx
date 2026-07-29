import Link from "next/link";

const practiceAreas = [
  {
    number: "01",
    title: "Family Law",
    slug: "family-law",
    description:
      "Sensitive and practical guidance for matrimonial matters, divorce, maintenance, custody and family disputes.",
  },
  {
    number: "02",
    title: "Civil Litigation",
    slug: "civil-litigation",
    description:
      "Strategic representation in civil disputes, recovery matters, injunctions and related proceedings.",
  },
  {
    number: "03",
    title: "Property Law",
    slug: "property-law",
    description:
      "Legal assistance with property disputes, documentation, ownership issues and real-estate transactions.",
  },
  {
    number: "04",
    title: "Criminal Law",
    slug: "criminal-law",
    description:
      "Careful and determined representation in criminal complaints, bail matters and court proceedings.",
  },
];

export default function PracticePreview() {
  return (
    <section className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-accent" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-strong">
                Practice areas
              </p>
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-5xl">
              Legal services shaped around your needs.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-muted lg:justify-self-end">
            We provide clear, focused and practical legal support across a range
            of personal, family, property, civil and criminal matters.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {practiceAreas.map((area) => (
            <Link
              key={area.number}
              href={`/practice-areas/${area.slug}`}
              className="group relative overflow-hidden rounded-[1.75rem] border border-primary/12 bg-surface-strong p-8 transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-primary/8 sm:p-10"
            >
              <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-accent/10 transition duration-500 group-hover:scale-125" />

              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <span className="text-xs font-semibold tracking-[0.24em] text-accent-strong">
                    {area.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/15 text-ink transition duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary"
                  >
                    →
                  </span>
                </div>

                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.025em] text-ink sm:text-3xl">
                  {area.title}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-muted">
                  {area.description}
                </p>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                  Learn more
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/practice-areas"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-on-primary transition duration-300 hover:-translate-y-0.5 hover:bg-primary-raised"
          >
            View All Practice Areas
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
