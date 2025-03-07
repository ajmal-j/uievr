import Footer from "@/components/layouts/footer";
import ClientTestimonials from "@/components/pages/home/client-testimonials";
import Contact from "@/components/pages/home/contact";
import EvrExplanation from "@/components/pages/home/evr-explanation";
import Hero from "@/components/pages/home/hero";
import InfiniteHorizontalMovingCards from "@/components/pages/home/infinite-horizontal-moving-cards";
import LetsWorkGradientText from "@/components/pages/home/lets-work-gradient-text";
import OurClients from "@/components/pages/home/our-clients";
import OurServices from "@/components/pages/home/our-services";
import OurTeam from "@/components/pages/home/our-team";
import OurWorks from "@/components/pages/home/our-works";
import StepsToWorkWithUs from "@/components/pages/home/steps-to-work-with-us";

export default function Home() {
  return (
    <div className='overflow-hidden 2xl:space-y-28 xl:space-y-24 lg:space-y-20 md:space-y-16 sm:space-y-14 space-y-6 pb-20'>
      <Hero />
      <OurClients />
      {/* <StepsToWorkWithUs /> */}
      {/* <OurServices /> */}
      {/* <EvrExplanation /> */}
      {/* <OurWorks /> */}
      {/* <OurTeam /> */}
      {/* <ClientTestimonials /> */}
      {/* <LetsWorkGradientText /> */}
      {/* <Contact /> */}
      {/* <InfiniteHorizontalMovingCards /> */}
      {/* <Footer /> */}
    </div>
  );
}
