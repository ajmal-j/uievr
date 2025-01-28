import Hero from "@/components/pages/home/hero";
import HeroGradientSvg from "@/components/pages/home/hero-gradient-svg";
import OurClients from "@/components/pages/home/our-clients";

export default function Home() {
  return (
    <div className='relative overflow-hidden space-y-32'>
      <HeroGradientSvg />
      <Hero />
      <OurClients />
    </div>
  );
}
