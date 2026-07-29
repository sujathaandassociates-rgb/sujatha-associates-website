import Link from "next/link";

export default function PracticeAreaLayout({
  title,
  intro,
  services,
  process,
}: {
  title: string;
  intro: string;
  services: { heading: string; items: string[] }[];
  process: { step: string; description: string }[];
}) {
  return (
    <section className="bg-surface text-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-accent" />
          <Link
            href="/practice-areas"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-strong transition hover:text-accent"
          >
            Practice Areas
          </Link>
        </div>

        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
          {title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{intro}</p>
      </div>

      <div className="border-t border-primary/10 bg-surface-strong">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-accent" />
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-strong">
                  What we handle
                </p>
              </div>

              <div className="mt-10 space-y-10">
                {services.map((section) => (
                  <div key={section.heading}>
                    <h2 className="text-2xl font-semibold tracking-[-0.025em]">
                      {section.heading}
                    </h2>
                    <ul className="mt-4 space-y-2.5">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-muted"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="sticky top-32 rounded-[2rem] bg-primary p-8 text-on-primary sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-light">
                  Our approach
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  What to expect
                </h2>

                <ol className="mt-8 space-y-5">
                  {process.map((item, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-light text-xs font-semibold text-ink">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-semibold text-white">{item.step}</p>
                        <p className="mt-1 text-sm leading-6 text-on-primary-muted">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <Link
                  href="/contact"
                  className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-accent-light px-6 py-4 text-sm font-semibold text-ink transition duration-300 hover:bg-surface-strong"
                >
                  Book Consultation
                </Link>

                <p className="mt-4 text-center text-xs text-on-primary-muted/80">
                  No obligation. Confidential enquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
