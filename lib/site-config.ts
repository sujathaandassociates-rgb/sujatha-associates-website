/** Replace these placeholders with verified firm information before publishing. */
export const siteConfig = {
  name: "Sujatha and Associates",
  shortName: "Sujatha & Associates",
  descriptor: "Advocates & Legal Consultants",
  contact: { phone: undefined, email: undefined, address: undefined, officeHours: "Office hours to be confirmed" },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Practice Areas", href: "#practice" },
    { label: "Our Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ],
  practiceAreas: [
    { number: "01", title: "Civil Litigation", description: "Strategic representation in civil disputes, recovery matters, injunctions, contracts, and appellate proceedings." },
    { number: "02", title: "Criminal Law", description: "Professional defence and representation in bail matters, trials, appeals, complaints, and criminal proceedings." },
    { number: "03", title: "Property Law", description: "Legal support for property disputes, title verification, registrations, partitions, tenancy, and documentation." },
    { number: "04", title: "Family Law", description: "Confidential guidance for divorce, maintenance, custody, domestic disputes, succession, and family settlements." },
    { number: "05", title: "Corporate Law", description: "Practical legal advice for businesses, contracts, compliance, commercial disputes, and corporate transactions." },
    { number: "06", title: "Consumer Law", description: "Representation in consumer complaints involving defective products, deficient services, insurance, and real estate." },
  ],
  values: [
    { title: "Clarity", description: "We explain legal issues and available options in clear, practical language." },
    { title: "Confidentiality", description: "Every consultation and document is handled with care and discretion." },
    { title: "Commitment", description: "We approach every matter with preparation, professionalism, and attention." },
  ],
} as const;
