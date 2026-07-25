import type { Metadata } from "next";
import PracticeAreaLayout from "@/components/PracticeAreaLayout";

export const metadata: Metadata = {
  title: "Civil Litigation",
  description:
    "Strategic representation in civil disputes, recovery matters, injunctions and related proceedings at Sujatha and Associates.",
};

export default function CivilLitigationPage() {
  return (
    <PracticeAreaLayout
      title="Civil Litigation"
      intro="Civil disputes demand careful preparation, clear strategy and determined advocacy. Sujatha and Associates represents clients in a wide range of civil matters, from recovery suits to complex contractual disputes."
      services={[
        {
          heading: "Recovery & Debt Recovery",
          items: [
            "Recovery suits and money decree proceedings",
            "Cheque bounce cases under Section 138 NI Act",
            "Debt collection and enforcement",
            "Execution of decrees and orders",
          ],
        },
        {
          heading: "Injunctions & Interim Relief",
          items:
            [
              "Temporary and permanent injunctions",
              "Status quo orders",
              "Mandatory and prohibitory injunctions",
              "Ad interim relief applications",
            ],
        },
        {
          heading: "Contract & Commercial Disputes",
          items: [
            "Breach of contract claims",
            "Specific performance suits",
            "Partnership disputes",
            "Joint venture disagreements",
          ],
        },
        {
          heading: "Tort & Negligence Claims",
          items: [
            "Personal injury claims",
            "Defamation suits",
            "Nuisance and trespass actions",
            "Compensation claims",
          ],
        },
        {
          heading: "Appellate Proceedings",
          items: [
            "Civil appeals and revisions",
            "Review and recall applications",
            "Writ petitions in High Court",
          ],
        },
      ]}
      process={[
        {
          step: "Case Evaluation",
          description:
            "We review the facts, documents and legal merits of your matter before advising on the best course of action.",
        },
        {
          step: "Pre-Litigation Strategy",
          description:
            "Where appropriate, we attempt resolution through notice, negotiation or alternative dispute resolution before filing suit.",
        },
        {
          step: "Filing & Representation",
          description:
            "We prepare and file all necessary pleadings and represent you at every hearing, working towards a favourable outcome.",
        },
        {
          step: "Enforcement & Follow-Up",
          description:
            "After judgment, we assist with execution, compliance and any necessary enforcement proceedings.",
        },
      ]}
    />
  );
}
