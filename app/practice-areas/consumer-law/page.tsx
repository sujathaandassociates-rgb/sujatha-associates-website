import type { Metadata } from "next";
import PracticeAreaLayout from "@/components/PracticeAreaLayout";

export const metadata: Metadata = {
  title: "Consumer Law",
  description:
    "Representation in consumer complaints involving products, services, insurance and real estate at Sujatha and Associates.",
};

export default function ConsumerLawPage() {
  return (
    <PracticeAreaLayout
      title="Consumer Law"
      intro="Consumer protection law safeguards your rights as a buyer of goods and services. Sujatha and Associates helps clients pursue remedies for defective products, deficient services and unfair trade practices through appropriate consumer forums."
      services={[
        {
          heading: "Consumer Complaints",
          items: [
            "Defective product claims",
            "Deficient service complaints",
            "Unfair trade practice disputes",
            "E-commerce and online purchase disputes",
          ],
        },
        {
          heading: "Insurance Disputes",
          items: [
            "Wrongful claim rejection",
            "Delay in insurance settlement",
            "Mis-selling of insurance policies",
            "Health and motor insurance disputes",
          ],
        },
        {
          heading: "Real Estate Consumer Matters",
          items: [
            "Delayed possession claims",
            "Builder fraud and deficiency",
            "Misrepresentation in property sales",
            "Maintenance and common area disputes",
          ],
        },
        {
          heading: "Appellate Proceedings",
          items: [
            "Appeals to State and National Consumer Disputes Redressal Commissions",
            "Revision petitions",
            "Enforcement of consumer forum orders",
          ],
        },
      ]}
      process={[
        {
          step: "Complaint Assessment",
          description:
            "We review your purchase details, evidence of deficiency or defect, and advise on the appropriate consumer forum and remedies available.",
        },
        {
          step: "Notice & Pre-Litigation",
          description:
            "We send a formal notice to the opposing party, giving them an opportunity to resolve the matter before formal proceedings.",
        },
        {
          step: "Filing & Representation",
          description:
            "We prepare and file the consumer complaint with complete documentation and represent you at every hearing.",
        },
        {
          step: "Enforcement & Compensation",
          description:
            "After obtaining an order, we assist with enforcement and ensure that compensation or relief is properly recovered.",
        },
      ]}
    />
  );
}
