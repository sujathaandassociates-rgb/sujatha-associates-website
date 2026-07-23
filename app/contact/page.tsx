const whatsappUrl =
  "https://wa.me/919036931203?text=Hello%2C%20I%20would%20like%20to%20book%20a%20legal%20consultation%20with%20Sujatha%20and%20Associates.";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=No.+320%2F58%2C+1st+Floor%2C+6th+Cross%2C+Muneshwara+Nagar%2C+Ullal+Main+Road%2C+Bangalore+560056";

export default function ContactPage() {
  return (
    <section className="bg-[#f8f5ef] text-[#14342f]">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b78a35]">
            Contact
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
            Discuss your legal matter with our team.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#14342f]/70">
            Contact Sujatha and Associates to request a consultation.
          </p>
        </div>

        <div className="rounded-3xl bg-[#14342f] p-8 text-white sm:p-10">
          <div className="space-y-7">
            <a
              href="tel:+919036931203"
              className="block text-2xl font-semibold text-[#d6b56c]"
            >
              +91 90369 31203
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white"
            >
              Message on WhatsApp
            </a>

            <address className="not-italic leading-7 text-white/70">
              No. 320/58, 1st Floor,
              <br />
              6th Cross, Muneshwara Nagar,
              <br />
              Ullal Main Road,
              <br />
              Bangalore – 560056
            </address>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#d6b56c]"
            >
              View on Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}