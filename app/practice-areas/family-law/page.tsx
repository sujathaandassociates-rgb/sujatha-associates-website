import type { Metadata } from "next";
import PracticeAreaLayout from "@/components/PracticeAreaLayout";

export const metadata: Metadata = {
  title: "Family Law",
  description:
    "Confidential legal assistance with divorce, maintenance, custody, domestic disputes, and succession matters at Sujatha and Associates.",
};

export default function FamilyLawPage() {
  return (
    <PracticeAreaLayout
      title="Family Law"
      intro="Family legal matters require sensitivity, discretion and careful guidance. Sujatha and Associates provides confidential support for individuals and families navigating divorce, custody, maintenance and other domestic legal issues."
      services={[
        {
          heading: "Matrimonial Disputes",
          items: [
            "Divorce and separation proceedings",
            "Contested and mutual consent divorce",
            "Restitution of conjugal rights",
            "Judicial separation",
            "Annulment of marriage",
          ],
        },
        {
          heading: "Maintenance & Alimony",
          items: [
            "Maintenance claims under Section 125 CrPC",
            "Interim and permanent alimony",
            "Spousal support applications",
            "Enforcement of maintenance orders",
          ],
        },
        {
          heading: "Child Custody & Guardianship",
          items: [
            "Custody and visitation disputes",
            "Guardianship applications",
            "Child welfare considerations",
            "Relocation and access orders",
          ],
        },
        {
          heading: "Domestic Violence & Protection",
          items: [
            "Protection orders under the DV Act",
            "Filing and responding to complaints",
            "Residence and monetary relief",
          ],
        },
        {
          heading: "Succession & Inheritance",
          items: [
            "Succession certificate applications",
            "Will disputes and probate",
            "Intestate succession matters",
            "Family property partitions",
          ],
        },
      ]}
      process={[
        {
          step: "Confidential Consultation",
          description:
            "We begin with a private discussion to understand your family situation, priorities and the legal options available to you.",
        },
        {
          step: "Document Review & Strategy",
          description:
            "Our team reviews relevant documents and advises on the most appropriate legal approach, whether negotiation or formal proceedings.",
        },
        {
          step: "Negotiation & Mediation",
          description:
            "Where possible, we seek amicable resolution through mediation and structured negotiations to minimise distress.",
        },
        {
          step: "Court Representation",
          description:
            "If court proceedings are necessary, we provide determined and sensitive representation throughout the process.",
        },
      ]}
    />
  );
}
