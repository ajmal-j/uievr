/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

export default function InfiniteHorizontalMovingCards() {
  return (
    <div className='relative border-t border-t-white/15 overflow-hidden whitespace-nowrap bg-[#101419] xl:pt-12 lg:pt-10 md:pt-8 sm:pt-6 pt-5 xl:pb-14 lg:pb-12 md:pb-10 sm:pb-8 pb-6 flex items-center justify-start gap-24'>
      <Card />
      <Card />
    </div>
  );
}

function Card() {
  return (
    <motion.div
      className='flex items-center lg:gap-24 md:gap-18 sm:gap-14 gap-10 text-gray-400 text-3xl font-medium'
      animate={{
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 100,
            ease: "linear",
          },
        },
      }}
    >
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className='flex items-center lg:gap-5 md:gap-4 sm:gap-3 gap-2'
        >
          <div className='xl:w-[40px] lg:w-[35px] md:w-[30px] sm:w-[25px] w-[20px]'>
            <img
              src='/pages/home/elements/flash-secondary.svg'
              className='object-contain'
              alt=''
            />
          </div>
          <span className='text-white/25 font-urbanist xl:text-[66px] lg:text-[55px] md:text-[45px] sm:text-[35px] text-[25px] font-medium inline-block'>
            Let&apos;s build your project
          </span>
        </div>
      ))}
    </motion.div>
  );
}
