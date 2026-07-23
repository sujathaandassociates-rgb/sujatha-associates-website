const practiceAreas = [
  {
    title: "Civil Litigation",
    description:
      "Representation in civil disputes, recovery matters, injunctions, contracts, and appellate proceedings.",
  },
  {
    title: "Criminal Law",
    description:
      "Assistance in bail matters, complaints, trials, appeals, and criminal proceedings.",
  },
  {
    title: "Property Law",
    description:
      "Support for property disputes, title verification, registrations, partitions, tenancy, and documentation.",
  },
  {
    title: "Family Law",
    description:
      "Confidential assistance with divorce, maintenance, custody, domestic disputes, and succession.",
  },
  {
    title: "Corporate Law",
    description:
      "Advice for contracts, compliance, commercial disputes, and business-related legal matters.",
  },
  {
    title: "Consumer Law",
    description:
      "Representation in consumer complaints involving products, services, insurance, and real estate.",
  },
];

export default function PracticeAreasPage() {
  return (
    <section className="bg-[#f8f5ef] text-[#14342f]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b78a35]">
          Practice areas
        </p>

        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
          Legal support for matters that require careful attention.
        </h1>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[#14342f]/10 bg-[#14342f]/10 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, index) => (
            <article
              key={area.title}
              className="group bg-white p-9 transition duration-300 hover:bg-[#14342f] hover:text-white"
            >
              <p className="text-xs tracking-[0.25em] text-[#b78a35]">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h2 className="mt-14 text-3xl font-semibold">
                {area.title}
              </h2>

              <p className="mt-5 leading-7 text-current opacity-65">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}