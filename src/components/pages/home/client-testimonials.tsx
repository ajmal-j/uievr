"use client";

import GradientHeading from "@/components/ui/gradient-heading";
import { motion } from "framer-motion";

const testimonials = [
  {
    image: "/pages/home/icons/client-1.png",
    name: "Mario M.",
    description:
      "Working with this AI-driven construction team was a game-changer. Their precision and attention to detail made our project smooth and stress-free. Highly recommended!",
    rating: 4.9,
  },
  {
    image: "/pages/home/icons/client-1.png",
    name: "Mario M.",
    description:
      "Working with this AI-driven construction team was a game-changer. Their precision and attention to detail made our project smooth and stress-free. Highly recommended!",
    rating: 4.9,
  },
  {
    image: "/pages/home/icons/client-1.png",
    name: "Mario M.",
    description:
      "Working with this AI-driven construction team was a game-changer. Their precision and attention to detail made our project smooth and stress-free. Highly recommended!",
    rating: 4.9,
  },
  {
    image: "/pages/home/icons/client-1.png",
    name: "Mario M.",
    description:
      "Working with this AI-driven construction team was a game-changer. Their precision and attention to detail made our project smooth and stress-free. Highly recommended!",
    rating: 4.9,
  },
];

export default function ClientTestimonials() {
  const radius = 200;
  const duration = 50;

  return (
    <div className='w-full relative 2xl:py-28 lg:py-42 md:py-96 sm:py-[420px] py-[500px] flex'>
      <div className='flex items-center justify-start '>
        <img
          src='/pages/home/elements/client-testimonial-side-eclipse.svg'
          className='lg:block hidden'
          alt='eclipse half'
        />
      </div>
      <img
        src='/pages/home/elements/client-testimonial-side-eclipse-tab.svg'
        className='lg:hidden hidden md:block min-h-[550px] absolute top-1/2
        -translate-y-1/2 -translate-x-[5%]'
        alt='eclipse half'
      />
      <img
        src='/pages/home/elements/client-testimonial-side-eclipse-mobile.svg'
        className='md:hidden block min-h-[550px] absolute top-1/2
        -translate-y-1/2 -translate-x-[20%]'
        alt='eclipse half'
      />
      <div className='w-full flex items-center justify-center'>
        <div className='flex lg:items-start items-center justify-center flex-col centered-wrapper-custom-width max-w-[780px] xl:gap-10 lg:gap-8 md:gap-6 sm:gap-4 gap-3'>
          <GradientHeading className='text-center text-[min(110px,12vw)] leading-[0.9]'>
            What our clients <br /> say's{" "}
            <div className='inline-block relative'>
              <motion.div
                animate={{
                  height: ["0%", "110%", "110%", "110%", "110%", "0%"],
                  width: ["0%", "105%", "105%", "105%", "105%", "0%"],
                  transition: {
                    duration: 7,
                    ease: "easeInOut",
                    delay: 0.2,
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 2,
                  },
                }}
                viewport={{ once: true }}
                className='absolute -top-[2px] -left-1 -right-4 -bottom-3 bg-secondaryBackground/15 border-[1px] border-secondaryBackground'
              >
                <div className='w-full h-full relative'>
                  <div className='lg:w-[13px] sm:w-[11px] w-[8px] lg:h-[11px] sm:h-[8px] h-[6px] absolute top-0 left-0 bg-secondaryBackground -translate-x-1/2 -translate-y-1/2' />
                  <div className='lg:w-[13px] sm:w-[11px] w-[8px] lg:h-[11px] sm:h-[8px] h-[6px] absolute top-0 right-0 bg-secondaryBackground translate-x-1/2 -translate-y-1/2' />
                  <div className='lg:w-[13px] sm:w-[11px] w-[8px] lg:h-[11px] sm:h-[8px] h-[6px] absolute bottom-0 left-0 bg-secondaryBackground -translate-x-1/2 translate-y-1/2' />
                  <div className='lg:w-[13px] sm:w-[11px] w-[8px] lg:h-[11px] sm:h-[8px] h-[6px] absolute bottom-0 right-0 bg-secondaryBackground translate-x-1/2 translate-y-1/2' />
                  <motion.svg
                    animate={{
                      opacity: [0.6, 1, 0, 0, 1, 0.6],
                      transition: {
                        duration: 7,
                        ease: "easeInOut",
                        delay: 0.2,
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 2,
                      },
                    }}
                    viewBox='0 0 24 24'
                    className='absolute lg:w-[40px] sm:w-[30px] w-[20px] origin-center lg:-bottom-5 sm:-bottom-4 -bottom-2 lg:-right-3 sm:-right-2 -right-1 translate-x-1/2 translate-y-1/2'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.92098 2.29951C6.93571 1.5331 5.5 2.23523 5.5 3.48349V20.4923C5.5 21.9145 7.2945 22.5382 8.17661 21.4226L12.3676 16.1224C12.6806 15.7267 13.1574 15.4958 13.6619 15.4958H20.5143C21.9425 15.4958 22.5626 13.6887 21.4353 12.8119L7.92098 2.29951Z'
                      stroke='black'
                      fill='#B9FD50'
                    />
                  </motion.svg>
                </div>
              </motion.div>
              <span className='inline-block bg-gradient-to-b from-white/70 to-white/60 px-[2px] text-transparent bg-clip-text'>
                about us
              </span>
            </div>
          </GradientHeading>
          <p className='font-outfit xl:text-[22px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[9px] text-[#8A8484] place-self-center max-w-[min(600px,65vw)] lg:text-start sm:text-center text-start'>
            Your brand’s journey to creativity begins with us, where ideas
            become masterpieces.
          </p>
        </div>
      </div>
      <div className='absolute top-[20%] left-0 right-0 bottom-0 grid w-full'>
        <div className='relative flex items-center justify-center w-full lg:-translate-x-[30%] md:-translate-x-[20%] -translate-x-[30%] max-w-[2000px]'>
          {testimonials.map((testimonial, index) => {
            let angle = (index / testimonials.length) * 360;
            angle += 210;

            return (
              <motion.div
                key={index}
                initial={{ rotate: angle, x: radius, y: 0 }}
                animate={{
                  rotate: [angle, angle + 360],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration,
                  ease: "linear",
                }}
                className='absolute flex items-center justify-center 2xl:max-w-[min(35dvw,780px)] xl:max-w-[min(60dvw,780px)] lg:max-w-[min(70dvw,780px)] md:max-w-[80dvw] sm:max-w-[85dvw] max-w-[90dvw] w-full'
                style={{ transformOrigin: `-${radius}px 0px` }}
              >
                <motion.div
                  initial={{ rotate: -angle }}
                  animate={{
                    rotate: [-angle, -(angle + 360)],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration,
                    ease: "linear",
                  }}
                  className='lg:px-8 sm:px-6 px-5 lg:py-7 py-6 xl:rounded-xl lg:rounded-lg md:rounded-[13px] sm:rounded-[12px] rounded-[10px] flex items-center md:gap-6 sm:gap-5 gap-4 bg-white/20 backdrop-blur-xl'
                >
                  <div className='flex flex-col gap-2 items-center justify-center'>
                    <div>
                      <img
                        src={testimonial.image}
                        className='xl:w-[75px] lg:w-[60px] md:w-[50px] sm:w-[40px] w-[31px] object-contain'
                        alt={`Client ${testimonial.name} avatar`}
                      />
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                      <img
                        src='/pages/home/icons/star.svg'
                        className='xl:w-[26px] lg:w-[22px] md:w-[17px] sm:w-[14px] w-[10px] object-contain'
                        alt='Star Icon'
                      />
                      <span className='font-urbanist xl:text-[26px] lg:text-[22px] md:text-[17px] sm:text-[14px] text-[11px] font-semibold text-[#F1F1F1]'>
                        {testimonial.rating}
                      </span>
                    </div>
                  </div>
                  <div className='flex-1 flex flex-col items-start justify-center gap-1.5'>
                    <h3 className='text-white font-urbanist font-bold xl:text-[21px] lg:text-[18px] md:text-[14px] sm:text-[12px] text-[9px]'>
                      {testimonial.name}
                    </h3>
                    <p className='text-[#DDDDDD] font-urbanist xl:text-[21px] lg:text-[18px] md:text-[14px] sm:text-[12px] text-[8px]'>
                      {testimonial.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
