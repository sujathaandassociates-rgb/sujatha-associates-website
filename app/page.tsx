import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import PracticePreview from "@/components/PracticePreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PracticePreview />
      <WhyChooseUs />
      <ProcessSection />
      <CTASection />
    </>
  );
}