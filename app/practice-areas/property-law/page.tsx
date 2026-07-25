import type { Metadata } from "next";
import PracticeAreaLayout from "@/components/PracticeAreaLayout";

export const metadata: Metadata = {
  title: "Property Law",
  description:
    "Legal assistance with property disputes, title verification, ownership issues and real-estate transactions at Sujatha and Associates.",
};

export default function PropertyLawPage() {
  return (
    <PracticeAreaLayout
      title="Property Law"
      intro="Property matters involve significant financial and personal interests. Sujatha and Associates provides careful legal guidance on disputes, transactions, title issues and all aspects of real-estate law."
      services={[
        {
          heading: "Property Disputes",
          items: [
            "Ownership and title disputes",
            "Partition suits and family property division",
            "Possession and eviction proceedings",
            "Adverse possession claims",
          ],
        },
        {
          heading: "Title Verification & Due Diligence",
          items: [
            "Title search and verification",
            "Encumbrance certificate review",
            "Legal opinion for property purchases",
            "Due diligence for commercial transactions",
          ],
        },
        {
          heading: "Real Estate Transactions",
          items: [
            "Sale deed drafting and review",
            "Agreement for sale preparation",
            "Registration assistance",
            "Lease and rental agreements",
          ],
        },
        {
          heading: "Landlord & Tenant Matters",
          items: [
            "Eviction proceedings",
            "Rent control disputes",
            "Lease termination and renewal",
            "Security deposit recovery",
          ],
        },
        {
          heading: "Revenue & Regulatory Matters",
          items: [
            "Land use conversion applications",
            "Mutation and survey proceedings",
            "Building plan approvals",
            "Revenue authority appeals",
          ],
        },
      ]}
      process={[
        {
          step: "Document Collection & Review",
          description:
            "We begin by collecting and reviewing all property documents, title deeds and related records.",
        },
        {
          step: "Title Analysis",
          description:
            "Our team conducts a thorough title analysis to identify any encumbrances, disputes or legal risks.",
        },
        {
          step: "Legal Strategy & Advice",
          description:
            "Based on the analysis, we provide clear advice on your rights, the strengths of your position and the recommended legal steps.",
        },
        {
          step: "Representation & Resolution",
          description:
            "We represent you in negotiations, registration offices or court proceedings as needed to protect your interests.",
        },
      ]}
    />
  );
}
