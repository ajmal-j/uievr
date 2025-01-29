import Hero from "@/components/pages/home/hero";
import OurClients from "@/components/pages/home/our-clients";
import StepsToWorkWithUs from "@/components/pages/home/steps-to-work-with-us";

export default function Home() {
  return (
    <div className='overflow-hidden space-y-32'>
      <Hero />
      <OurClients />
      <StepsToWorkWithUs />
      <div>our services</div>
    </div>
  );
}
