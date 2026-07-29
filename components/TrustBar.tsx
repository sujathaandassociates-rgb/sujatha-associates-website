const trustItems = [
  {
    title: "Client Focused",
    description:
      "Every matter is approached with attention, discretion and a clear understanding of the client's priorities.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-current"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" />
      </svg>
    ),
  },
  {
    title: "Experienced Team",
    description:
      "Practical legal guidance supported by experience, preparation and careful strategy.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-current"
      >
        <path d="M12 2L1 21h22L12 2Zm0 4.5L19.5 19h-15L12 6.5ZM11 10v4h2v-4h-2Zm0 6v2h2v-2h-2Z" />
      </svg>
    ),
  },
  {
    title: "Trusted Representation",
    description:
      "Clients receive straightforward guidance and timely updates throughout the legal process.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-current"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z" />
      </svg>
    ),
  },
  {
    title: "Timely & Effective",
    description:
      "Focused solutions designed around the facts, the law and the most effective path forward.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-current"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm.5 11H7v-1h5.5V7h1v6Z" />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <section className="bg-primary py-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {trustItems.map((item) => (
          <article key={item.title} className="group flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent-light/15 text-accent-light transition duration-300 group-hover:bg-accent-light/25">
              {item.icon}
            </div>

            <div>
              <h2 className="text-base font-semibold tracking-[-0.01em] text-on-primary">
                {item.title}
              </h2>

              <p className="mt-1.5 text-sm leading-5 text-on-primary-muted">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
