const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We begin by understanding your situation, priorities and the legal issues that need attention.",
  },
  {
    number: "02",
    title: "Case Assessment",
    description:
      "We review the facts, documents and available legal options before recommending the next steps.",
  },
  {
    number: "03",
    title: "Focused Strategy",
    description:
      "A practical legal strategy is developed around your objectives, risks and the circumstances of the matter.",
  },
  {
    number: "04",
    title: "Representation",
    description:
      "We proceed with clear communication, careful preparation and committed representation throughout the process.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-surface-strong py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-accent" />

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-strong">
              Our process
            </p>

            <span className="h-px w-12 bg-accent" />
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-5xl">
            A clear and considered approach from the beginning.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted">
            Every matter is different, but our approach remains structured,
            transparent and focused on helping clients move forward with
            confidence.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-primary/10 md:block lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-6 lg:space-y-10">
            {steps.map((step, index) => {
              const alignRight = index % 2 === 1;

              return (
                <article
                  key={step.number}
                  className="relative grid gap-6 md:grid-cols-[4rem_1fr] lg:grid-cols-2 lg:gap-16"
                >
                  <div
                    className={
                      alignRight
                        ? "lg:col-start-2 lg:row-start-1"
                        : "lg:col-start-1 lg:row-start-1"
                    }
                  >
                    <div className="rounded-[1.75rem] border border-primary/10 bg-surface p-8 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-primary/8 sm:p-10">
                      <span className="text-xs font-semibold tracking-[0.24em] text-accent-strong">
                        {step.number}
                      </span>

                      <h3 className="mt-6 text-2xl font-semibold tracking-[-0.025em] text-ink sm:text-3xl">
                        {step.title}
                      </h3>

                      <p className="mt-4 leading-7 text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-8 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-surface-strong bg-accent shadow md:block lg:left-1/2" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
