export default function OurApproachPage() {
  return (
    <section className="bg-primary text-on-primary">
      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-light">
            Our approach
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
            Clear advice. Careful preparation. Responsible representation.
          </h1>
        </div>

        <div className="space-y-8 text-lg leading-8 text-white/70">
          <p>
            We begin by listening carefully and understanding the legal and
            practical concerns involved in each matter.
          </p>

          <p>
            Clients receive clear explanations about their options, possible
            risks and the steps required to move forward.
          </p>

          <p>
            Every engagement is handled with professionalism, confidentiality,
            preparation and respect.
          </p>
        </div>
      </div>
    </section>
  );
}
