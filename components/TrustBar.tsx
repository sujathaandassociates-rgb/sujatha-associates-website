const trustItems = [
  {
    number: "01",
    title: "Client Focused",
    description:
      "Every matter is approached with attention, discretion and a clear understanding of the client’s priorities.",
  },
  {
    number: "02",
    title: "Experienced Representation",
    description:
      "Practical legal guidance supported by experience, preparation and careful strategy.",
  },
  {
    number: "03",
    title: "Clear Communication",
    description:
      "Clients receive straightforward guidance and timely updates throughout the legal process.",
  },
  {
    number: "04",
    title: "Practical Legal Strategy",
    description:
      "Focused solutions designed around the facts, the law and the most effective path forward.",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-[#14342f]/10 bg-white">
      <div className="mx-auto grid max-w-7xl divide-y divide-[#14342f]/10 px-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:px-10">
        {trustItems.map((item) => (
          <article
            key={item.number}
            className="group relative px-0 py-9 sm:px-8 lg:px-7"
          >
            <div className="absolute bottom-0 left-0 h-px w-0 bg-[#b78a35] transition-all duration-500 group-hover:w-full" />

            <p className="text-xs font-semibold tracking-[0.24em] text-[#b78a35]">
              {item.number}
            </p>

            <h2 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-[#14342f]">
              {item.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#14342f]/60">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}