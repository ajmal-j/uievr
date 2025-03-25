import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SVGAnimation() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      let delay = 0;
      if (window.innerWidth >= 1024) {
        delay = i * 0.5;
      } else {
        delay = i * 0.1;
      }
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: {
            delay,
            type: "spring",
            duration: window.innerWidth >= 1024 ? 20 : 10,
            bounce: 0,
            ease: "linear",
          },
          opacity: { delay, duration: 1 },
        },
      };
    },
  };

  return (
    <div ref={ref} className='flex justify-center items-center'>
      <motion.svg
        width='1920'
        viewBox='0 0 1920 1866'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        initial='hidden'
        animate='visible'
        className='w-full min-w-[1500px]'
      >
        <motion.path
          d='M0 16H807.001C892.421 16 961.667 85.2466 961.667 170.667V1696C961.667 1781.42 1030.91 1850.67 1116.33 1850.67H1920'
          stroke='url(#paint0_linear_112_72)'
          className={"lg:stroke-[30px] md:stroke-[20px] stroke-[15px]"}
          fill='transparent'
          strokeLinecap='round'
          variants={draw}
          animate={isInView ? "visible" : "hidden"}
          custom={1}
        />
        <motion.path
          d='M0 16H807.001C892.421 16 961.667 85.2466 961.667 170.667V334.667'
          stroke='url(#paint1_linear_112_72)'
          className={"lg:stroke-[30px] md:stroke-[20px] stroke-[15px]"}
          fill='transparent'
          strokeLinecap='round'
          variants={draw}
          custom={2}
          animate={isInView ? "visible" : "hidden"}
        />
        <defs>
          <linearGradient
            id='paint0_linear_112_72'
            x1='1920'
            y1='1850.67'
            x2='960'
            y2='1850.67'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#002B67' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
          <linearGradient
            id='paint1_linear_112_72'
            x1='0'
            y1='175.333'
            x2='372.667'
            y2='175.333'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#004718' />
            <stop offset='1' stopColor='white' />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
