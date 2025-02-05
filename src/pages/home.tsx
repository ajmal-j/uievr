import ClientTestimonials from "@/components/pages/home/client-testimonials";
import EvrExplanation from "@/components/pages/home/evr-explanation";
import Hero from "@/components/pages/home/hero";
import LetsWorkGradientText from "@/components/pages/home/lets-work-gradient-text";
import OurClients from "@/components/pages/home/our-clients";
import OurServices from "@/components/pages/home/our-services";
import OurTeam from "@/components/pages/home/our-team";
import OurWorks from "@/components/pages/home/our-works";
import StepsToWorkWithUs from "@/components/pages/home/steps-to-work-with-us";

export default function Home() {
  return (
    <div className='overflow-hidden space-y-28 pb-36'>
      <Hero />
      <OurClients />
      <StepsToWorkWithUs />
      <OurServices />
      <EvrExplanation />
      <OurWorks />
      <OurTeam />
      <ClientTestimonials />
      <LetsWorkGradientText />
    </div>
  );
}
