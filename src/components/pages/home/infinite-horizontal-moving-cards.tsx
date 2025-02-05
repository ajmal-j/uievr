import { motion } from "framer-motion";

export default function InfiniteHorizontalMovingCards() {
  return (
    <div className='relative border-t border-t-white/15 overflow-hidden whitespace-nowrap bg-[#101419] pt-12 pb-14 flex items-center justify-start gap-24'>
      <motion.div
        className='flex items-center gap-24 text-gray-400 text-3xl font-medium'
        animate={{
          x: ["0%", "-100%"],
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
          <div key={index} className='flex items-center gap-5'>
            <div className='w-[40px]'>
              <img
                src='/pages/home/elements/flash-secondary.svg'
                className='object-contain'
                alt=''
              />
            </div>
            <span className='text-white/25 font-urbanist text-[66px] font-medium inline-block'>
              Let's build your project
            </span>
          </div>
        ))}
      </motion.div>
      <motion.div
        className='flex items-center gap-24 text-gray-400 text-3xl font-medium'
        animate={{
          x: ["0%", "-100%"],
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
          <div key={index} className='flex items-center gap-5'>
            <div className='w-[40px]'>
              <img
                src='/pages/home/elements/flash-secondary.svg'
                className='object-contain'
                alt=''
              />
            </div>
            <span className='text-white/25 font-urbanist text-[66px] font-medium inline-block'>
              Let's build your project
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
