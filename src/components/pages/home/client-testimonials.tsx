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
    <div className='w-full relative py-28 flex'>
      <div className='flex items-center justify-start'>
        <img
          src='/pages/home/elements/client-testimonial-side-eclipse.svg'
          alt='eclipse half'
        />
      </div>
      <div className='w-full flex items-center justify-center'>
        <div className='flex items-start justify-center flex-col centered-wrapper-custom-width max-w-[780px] gap-10'>
          <GradientHeading className='text-center text-[110px] leading-[0.9]'>
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
                  <div className='w-[13px] h-[11px] absolute top-0 left-0 bg-secondaryBackground -translate-x-1/2 -translate-y-1/2' />
                  <div className='w-[13px] h-[11px] absolute top-0 right-0 bg-secondaryBackground translate-x-1/2 -translate-y-1/2' />
                  <div className='w-[13px] h-[11px] absolute bottom-0 left-0 bg-secondaryBackground -translate-x-1/2 translate-y-1/2' />
                  <div className='w-[13px] h-[11px] absolute bottom-0 right-0 bg-secondaryBackground translate-x-1/2 translate-y-1/2' />
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
                    width='40px'
                    height='40px'
                    viewBox='0 0 24 24'
                    className='absolute origin-center -bottom-5 -right-3 translate-x-1/2 translate-y-1/2'
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
          <p className='font-outfit text-[22px] text-[#8A8484] place-self-center max-w-[600px]'>
            Your brand’s journey to creativity begins with us, where ideas
            become masterpieces.
          </p>
        </div>
      </div>
      <div className='absolute top-[20%] left-0 right-0 bottom-0 grid w-full'>
        <div className='relative flex items-center justify-center w-full -translate-x-[30%]'>
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
                className='absolute flex items-center justify-center max-w-[35dvw]'
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
                  className='px-8 py-7 rounded-xl flex items-center gap-6 bg-white/20 backdrop-blur-xl'
                >
                  <div className='flex flex-col gap-2 items-center justify-center'>
                    <div>
                      <img
                        src={testimonial.image}
                        className='w-[75px] object-contain'
                        alt={`Client ${testimonial.name} avatar`}
                      />
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                      <img
                        src='/pages/home/icons/star.svg'
                        className='w-[26px] object-contain'
                        alt='Star Icon'
                      />
                      <span className='font-urbanist text-[26px] font-semibold text-[#F1F1F1]'>
                        {testimonial.rating} {angle}
                      </span>
                    </div>
                  </div>
                  <div className='flex-1 flex flex-col items-start justify-center gap-1.5'>
                    <h3 className='text-white font-urbanist font-bold text-[21px]'>
                      {testimonial.name}
                    </h3>
                    <p className='text-[#DDDDDD] font-urbanist text-[21px] max-w-[570px]'>
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
