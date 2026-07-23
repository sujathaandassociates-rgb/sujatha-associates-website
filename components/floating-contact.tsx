const phoneNumber = "9036931203";

const whatsappMessage =
  "Hello, I would like to book a legal consultation with Sujatha and Associates.";

const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-3">
      <a
        href={`tel:+91${phoneNumber}`}
        aria-label="Call Sujatha and Associates"
        className="flex h-12 items-center gap-2 rounded-full bg-[#11271f] px-4 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#a77b2d]"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-current"
        >
          <path d="M6.62 10.79a15.5 15.5 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.3 11.3 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.19 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
        </svg>

        <span className="hidden sm:inline">Call Now</span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sujatha and Associates on WhatsApp"
        className="flex h-14 items-center gap-3 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#1ebe5d]"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-current"
        >
          <path d="M16.04 3C8.86 3 3.02 8.84 3.02 16c0 2.29.6 4.52 1.74 6.48L3 29l6.69-1.75A13 13 0 1 0 16.04 3Zm0 23.63c-2.08 0-4.12-.56-5.9-1.62l-.42-.25-3.97 1.04 1.06-3.86-.27-.44A10.57 10.57 0 1 1 16.04 26.63Zm5.8-7.91c-.32-.16-1.88-.93-2.17-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57a9.55 9.55 0 0 1-1.77-2.2c-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z" />
        </svg>

        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
}