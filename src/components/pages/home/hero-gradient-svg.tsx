export default function HeroGradientSvg() {
  return (
    <>
      <img
        src='/pages/home/elements/left-side-gradient.svg'
        className='absolute sm:top-0 top-4 left-0 -translate-x-[75%] z-0 md:blur-[70px] sm:blur-[50px] blur-[40px] bottom-0'
        alt=''
      />
      <img
        src='/pages/home/elements/right-side-gradient.svg'
        className='absolute sm:top-0 top-4 right-0 translate-x-[75%] z-0 md:blur-[70px] sm:blur-[50px] blur-[40px] bottom-0'
        alt=''
      />
    </>
  );
}
