import Hero from "@/components/pages/home/hero";
import HeroGradientSvg from "@/components/pages/home/hero-gradient-svg";

export default function Home() {
  return (
    <div className='relative overflow-hidden min-h-[200dvh]'>
      <HeroGradientSvg />
      <Hero />
    </div>
  );
}
