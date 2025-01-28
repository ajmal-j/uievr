export default function HeroGradientSvg() {
  return (
    <>
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
    </>
  );
}
