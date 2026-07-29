import type { Metadata } from "next";
import PracticeAreaLayout from "@/components/PracticeAreaLayout";

export const metadata: Metadata = {
  title: "Criminal Law",
  description:
    "Careful and determined representation in criminal complaints, bail matters and court proceedings at Sujatha and Associates.",
};

export default function CriminalLawPage() {
  return (
    <PracticeAreaLayout
      title="Criminal Law"
      intro="Criminal charges carry serious consequences and require experienced, careful legal representation. Sujatha and Associates provides determined defence and support across all stages of criminal proceedings."
      services={[
        {
          heading: "Bail Matters",
          items: [
            "Regular bail applications",
            "Anticipatory bail applications",
            "Bail cancellation and opposition",
            "Interim bail and extension requests",
          ],
        },
        {
          heading: "Trial & Defence",
          items: [
            "Defence in criminal trials",
            "Cross-examination and witness management",
            "Alibi and evidence presentation",
            "Acquittal applications",
          ],
        },
        {
          heading: "Complaints & FIR",
          items: [
            "Filing of FIR and complaints",
            "Quashing of FIR and complaints",
            "Private complaints before Magistrate",
            "Representation at police stations",
          ],
        },
        {
          heading: "Appeals & Revisions",
          items: [
            "Criminal appeals to Higher Courts",
            "Revision petitions",
            "Review and recall applications",
            "Transfer petitions",
          ],
        },
        {
          heading: "Specialised Criminal Matters",
          items: [
            "Domestic violence cases",
            "Cybercrime and IT Act offences",
            "Economic offences and fraud",
            "NDPS and substance-related cases",
          ],
        },
      ]}
      process={[
        {
          step: "Immediate Consultation",
          description:
            "We provide prompt consultation to understand the charges, assess the situation and advise on immediate protective steps.",
        },
        {
          step: "Case Analysis & Defence Preparation",
          description:
            "Our team analyses the evidence, identifies procedural irregularities and builds a strategic defence.",
        },
        {
          step: "Court Representation",
          description:
            "We represent you at every stage — bail hearings, trial proceedings and appellate courts — with careful and committed advocacy.",
        },
        {
          step: "Resolution & Follow-Up",
          description:
            "We pursue every available legal remedy and keep you informed throughout the process until the matter is resolved.",
        },
      ]}
    />
  );
}
