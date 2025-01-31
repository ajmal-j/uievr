import Header from "../../layouts/header";
import HeroGradientSvg from "./hero-gradient-svg";

export default function Hero() {
  return (
    <div className='min-h-[max(950px,100dvh)] bg-[url("/pages/home/hero-bg-svg.svg")] bg-repeat bg-top flex flex-col gap-5 items-center justify-between h-full font-dmSans relative'>
      <HeroGradientSvg />
      <Header className='opacity-0 static' />
      <div className='flex flex-col justify-center items-center text-[132px] tracking-tight'>
        <h1 className='bg-gradient-to-b from-white via-white to-[#999999] bg-clip-text text-transparent text-center leading-none -mb-3'>
          We build
        </h1>
        <h1 className='font-bold bg-gradient-to-b from-white via-white to-[#999999] bg-clip-text text-transparent text-center leading-none pb-2'>
          stunning
        </h1>
        <h1 className='bg-gradient-to-b from-white via-white to-[#999999] bg-clip-text text-transparent text-center leading-none -mt-6'>
          apps & websites
        </h1>
      </div>
      <div className='w-full px-20 flex flex-col items-center justify-center py-14 gap-1  z-10'>
        <button className='size-[132px] border grid place-content-center border-white rounded-full'>
          <img
            src='/pages/home/icons/double-chevron-down.svg'
            alt='Chevron down icon'
          />
        </button>
        <div className='w-full flex items-center justify-between'>
          <div className='flex-1 flex justify-start items-center'>
            <button className='flex items-center justify-center gap-5 bg-[#121031] px-7 py-5 rounded-[25px]'>
              <span className='inline-block font-urbanist font-black text-white uppercase text-[17px]'>
                Rating 4.9
              </span>
              <img
                src='/pages/home/logos/rating-switch-logo.png'
                className='h-[40px] object-contain'
                alt='Rating users logo'
              />
            </button>
          </div>
          <div className='flex flex-1 items-center justify-center'>
            <div>
              <span className='h-[30px] px-3 py-1 rounded-full leading-none uppercase text-white font-urbanist text-[15px] text-center border border-white'>
                We
              </span>
            </div>
            <div>
              <span className='h-[30px] px-3 py-1 rounded-full leading-none uppercase text-white font-urbanist text-[15px] text-center border border-white'>
                Ui
              </span>
            </div>
            <div>
              <span className='h-[30px] px-3 py-1 rounded-full leading-none uppercase text-white font-urbanist text-[15px] text-center border border-white'>
                Ever
              </span>
            </div>
          </div>
          <div className="flex-1 flex justify-end items-center'">
            <div className='bg-gradient-to-br from-[#2CCA5D]/40 via-white/10 to-transparent p-[2px] rounded-full'>
              <button className='relative flex items-center justify-center gap-5 rounded-full px-7 py-5 bg-gradient-to-b from-[#21202E] to-primaryBackground overflow-hidden'>
                <img
                  src='/pages/home/icons/whatsapp-icon.svg'
                  alt='Whatsapp logo'
                />
                <h4 className='text-white font-black font-urbanist uppercase text-[17px] text-nowrap leading-none'>
                  Chat with us
                </h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
