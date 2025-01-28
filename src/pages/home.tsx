import Hero from "@/components/pages/hero";

export default function Home() {
  return (
    <div className='relative overflow-hidden min-h-[200dvh]'>
      <img
        src='/pages/home/elements/right-side-gradient.svg'
        className='absolute top-0 right-0 bottom-0 translate-x-[75%] z-0 blur-[70px]'
        alt=''
      />
      <img
        src='/pages/home/elements/left-side-gradient.svg'
        className='absolute top-0 left-0 bottom-0 -translate-x-[75%] z-0 blur-[70px]'
        alt=''
      />
      <Hero />
    </div>
  );
}
