import Link from "next/link";
import FadeIn from "./FadeIn";

const practiceAreas = [
  {
    number: "01",
    title: "Family Law",
    description:
      "Sensitive and practical guidance for matrimonial matters, divorce, maintenance, custody and family disputes.",
  },
  {
    number: "02",
    title: "Civil Litigation",
    description:
      "Strategic representation in civil disputes, recovery matters, injunctions and related proceedings.",
  },
  {
    number: "03",
    title: "Property Law",
    description:
      "Legal assistance with property disputes, documentation, ownership issues and real-estate transactions.",
  },
  {
    number: "04",
    title: "Criminal Law",
    description:
      "Careful and determined representation in criminal complaints, bail matters and court proceedings.",
  },
];

export default function PracticePreview() {
  return (
      <section className="bg-[#f8f5ef] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#b78a35]" />

              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9a712b]">
                Practice areas
              </p>
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#14342f] sm:text-5xl">
              Legal services shaped around your needs.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-[#334f49] lg:justify-self-end">
            We provide clear, focused and practical legal support across a
            range of personal, family, property, civil and criminal matters.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {practiceAreas.map((area) => (
            <Link
              key={area.number}
              href="/practice-areas"
              className="group relative overflow-hidden rounded-[1.75rem] border border-[#14342f]/12 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#b78a35]/60 hover:shadow-xl hover:shadow-[#14342f]/8 sm:p-10"
            >
              <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-[#b78a35]/10 transition duration-500 group-hover:scale-125" />

              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <span className="text-xs font-semibold tracking-[0.24em] text-[#9a712b]">
                    {area.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#14342f]/15 text-[#14342f] transition duration-300 group-hover:border-[#14342f] group-hover:bg-[#14342f] group-hover:text-white"
                  >
                    →
                  </span>
                </div>

                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.025em] text-[#14342f] sm:text-3xl">
                  {area.title}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-[#425e58]">
                  {area.description}
                </p>

                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#14342f]">
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
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#14342f] px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#b78a35]"
          >
            View All Practice Areas
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}