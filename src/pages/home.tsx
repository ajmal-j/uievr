import Hero from "@/components/pages/home/hero";
import OurClients from "@/components/pages/home/our-clients";

export default function Home() {
  return (
    <div className='overflow-hidden space-y-32'>
      <Hero />
      <OurClients />
    </div>
  );
}
