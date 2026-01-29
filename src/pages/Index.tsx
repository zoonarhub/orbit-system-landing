import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import MethodSection from "@/components/landing/MethodSection";
import PillarsSection from "@/components/landing/PillarsSection";
import DeliverablesSection from "@/components/landing/DeliverablesSection";
import TargetSection from "@/components/landing/TargetSection";
import JourneySection from "@/components/landing/JourneySection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <AuthoritySection />
        <MethodSection />
        <PillarsSection />
        <DeliverablesSection />
        <TargetSection />
        <JourneySection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
