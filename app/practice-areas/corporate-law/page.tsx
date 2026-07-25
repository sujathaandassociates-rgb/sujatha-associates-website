import type { Metadata } from "next";
import PracticeAreaLayout from "@/components/PracticeAreaLayout";

export const metadata: Metadata = {
  title: "Corporate Law",
  description:
    "Legal advice for contracts, compliance, commercial disputes and business-related legal matters at Sujatha and Associates.",
};

export default function CorporateLawPage() {
  return (
    <PracticeAreaLayout
      title="Corporate Law"
      intro="Businesses face complex legal requirements across contracts, compliance, disputes and regulatory matters. Sujatha and Associates supports companies, partnerships and entrepreneurs with practical legal guidance tailored to their commercial objectives."
      services={[
        {
          heading: "Contracts & Agreements",
          items: [
            "Drafting and review of commercial contracts",
            "Service level agreements",
            "Non-disclosure and non-compete agreements",
            "Vendor and supplier agreements",
          ],
        },
        {
          heading: "Company & Compliance",
          items: [
            "Company incorporation and registration",
            "Corporate governance advisory",
            "Board resolution and compliance drafting",
            "Annual filing and regulatory compliance",
          ],
        },
        {
          heading: "Commercial Disputes",
          items: [
            "Breach of commercial agreements",
            "Partnership and LLP disputes",
            "Shareholder disputes",
            "Joint venture disagreements",
          ],
        },
        {
          heading: "Regulatory & Advisory",
          items: [
            "GST and tax compliance advisory",
            "Labour law compliance",
            "FEMA and foreign investment regulations",
            "Intellectual property advisory",
          ],
        },
      ]}
      process={[
        {
          step: "Business Understanding",
          description:
            "We begin by understanding your business structure, operations and the specific legal requirements relevant to your industry.",
        },
        {
          step: "Risk Assessment & Strategy",
          description:
            "Our team identifies legal risks and develops a compliance and protection strategy suited to your business goals.",
        },
        {
          step: "Documentation & Implementation",
          description:
            "We prepare, review and implement all necessary legal documents, contracts and compliance frameworks.",
        },
        {
          step: "Ongoing Support & Dispute Resolution",
          description:
            "We provide continuing advisory support and represent your business in any disputes or regulatory proceedings.",
        },
      ]}
    />
  );
}
