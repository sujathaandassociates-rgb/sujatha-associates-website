type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <svg
      aria-label="Sujatha and Associates, Advocates and Legal Consultants"
      className={`block h-auto w-full ${className}`}
      fill="none"
      role="img"
      viewBox="0 0 480 150"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M55 58c-20 0-31-9-31-22 0-15 14-24 33-24 15 0 28 5 37 14l-11 12c-7-7-16-10-26-10-8 0-13 3-13 8 0 4 4 6 14 8l12 2c20 4 29 13 29 27 0 17-16 28-38 28-18 0-34-6-44-17l12-13c8 9 19 14 32 14 10 0 16-4 16-10 0-5-4-7-15-9l-11-2Z"
          strokeWidth="5"
        />
        <path d="M111 96 143 13h19l32 83m-70-25h57" strokeWidth="5" />
        <path d="M138 47h29" strokeWidth="5" />
        <path d="M113 111h278" strokeWidth="2" />
      </g>
      <text
        fill="currentColor"
        fontFamily="Georgia, serif"
        fontSize="42"
        fontWeight="700"
        letterSpacing="3"
        x="207"
        y="58"
      >
        SUJATHA
      </text>
      <text
        fill="currentColor"
        fontFamily="Arial, sans-serif"
        fontSize="15"
        fontWeight="700"
        letterSpacing="5"
        x="211"
        y="85"
      >
        AND ASSOCIATES
      </text>
      <text
        fill="currentColor"
        fontFamily="Arial, sans-serif"
        fontSize="11"
        fontWeight="600"
        letterSpacing="3"
        x="110"
        y="137"
      >
        ADVOCATES &amp; LEGAL CONSULTANTS
      </text>
    </svg>
  );
}
