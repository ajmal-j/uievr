import { useRef } from "react";
import SVGAnimation from "./svg-animation";
import { motion, useInView } from "framer-motion";

export default function StepsToWorkWithUs() {
  const stepRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(stepRef, {
    once: true,
  });

  return (
    <div className='w-full space-y-32'>
      <div>
        <h2 className='text-white font-bold font-dmSans text-center px-4 text-[74px] tracking-tight'>
          3 Step to work with us
        </h2>
        <p className='text-[21px] text-white font-dmSans text-center px-4 tracking-tight opacity-60'>
          Effortless Steps to Start Your Project
        </p>
      </div>
      <div className='w-full relative' ref={stepRef}>
        <SVGAnimation />
        <div className='flex items-center justify-center absolute top-[20%] -translate-y-1/2 left-0 right-0 gap-20'>
          <div className='flex-1'></div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: isInView ? 1 : 0,
              transition: { delay: 1.8, duration: 0.2 },
            }}
            className='size-[113px] border-[7px] border-[#0E0E0E] bg-secondaryBackground rounded-full shadow-[0px_0px_48px_0px_#0E0E0E] grid place-content-center relative'
          >
            <span className='inline-block text-[#0E0E0E] text-[42.5px] font-dmSans font-semibold tracking-tight z-[1]'>
              01
            </span>
            <div className='size-[50px] bg-secondaryBackground absolute rounded-sm top-1/2 -translate-y-1/2 -right-[3px] rotate-45' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: isInView ? 1 : 0,
              scale: isInView ? 1 : 0.5,
              transition: {
                opacity: { duration: 1, delay: 1.8 },
                scale: { type: "spring", bounce: 0.5, duration: 1, delay: 1.8 },
              },
            }}
            className='flex-1 flex justify-start relative object-center'
          >
            <img
              src='/pages/home/steps/step-1.svg'
              className='absolute left-[60%] top-0 -translate-x-1/4 -translate-y-1/2'
              alt=''
            />
            <div className='inline-flex flex-col items-start justify-center -space-y-[1px] max-w-[440px] rotate-[3.7deg] '>
              <div className='bg-white px-[20px] py-[20px] inline-block rounded-[20px] w-full'>
                <img
                  src='/pages/home/steps/step-1.png'
                  className='rounded-[16px] w-full object-contain'
                  alt=''
                />
              </div>
              <div className='bg-white px-[20px] py-[20px] inline-block rounded-[20px] w-full space-y-3'>
                <h4 className='font-semibold font-dmSans text-[32px] tracking-tight text-[#0E0E0E] leading-none'>
                  Consultation
                </h4>
                <p className='text-[21px] font-dmSans text-[#0E0E0E] opacity-70 inline-block tracking-tight leading-tight'>
                  Begin with a discovery call to understand your project needs,
                  goals, and vision. We’ll discuss your requirements, timelines,
                  and budget, ensuring everything is aligned.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className='flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-0 right-0 gap-20'>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: isInView ? 1 : 0,
              scale: isInView ? 1 : 0.5,
              transition: {
                opacity: { duration: 1, delay: 2.3 },
                scale: { type: "spring", bounce: 0.5, duration: 1, delay: 2.3 },
              },
            }}
            className='flex-1 flex justify-end relative'
          >
            <img
              src='/pages/home/steps/step-2.svg'
              className='absolute right-[60%] bottom-0 translate-x-1/2 translate-y-[100%]'
              alt=''
            />
            <div className='inline-flex flex-col items-end justify-center -space-y-[1px] max-w-[440px] rotate-[-3.7deg] '>
              <div className='bg-white px-[20px] py-[20px] inline-block rounded-[20px] w-full'>
                <img
                  src='/pages/home/steps/step-2.png'
                  className='rounded-[16px] w-full object-contain'
                  alt=''
                />
              </div>
              <div className='bg-white px-[20px] py-[20px] inline-block rounded-[20px] w-full space-y-3'>
                <h4 className='font-semibold font-dmSans text-[32px] tracking-tight text-[#0E0E0E] leading-none'>
                  Design & Development
                </h4>
                <p className='text-[21px] font-dmSans text-[#0E0E0E] opacity-70 inline-block tracking-tight leading-tight'>
                  Once the project scope is clear, we dive into the design
                  phase. Our team creates wireframes, mockups, and prototypes
                  tailored to your brand. After approval, we move to
                  development, bringing your ideas to life.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: isInView ? 1 : 0,
              transition: { delay: 2.3, duration: 0.2 },
            }}
            className='size-[113px] border-[7px] border-[#0E0E0E] bg-secondaryBackground rounded-full shadow-[0px_0px_48px_0px_#0E0E0E] grid place-content-center relative'
          >
            <span className='inline-block text-[#0E0E0E] text-[42.5px] font-dmSans font-semibold tracking-tight z-[1]'>
              02
            </span>
            <div className='size-[50px] bg-secondaryBackground absolute rounded-sm top-1/2 -translate-y-1/2 -left-[3px] rotate-45' />
          </motion.div>
          <div className='flex-1'></div>
        </div>
        <div className='flex items-center justify-center absolute top-[80%] -translate-y-1/2 left-0 right-0 gap-20'>
          <div className='flex-1'></div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: isInView ? 1 : 0,
              transition: { delay: 2.9, duration: 0.2 },
            }}
            className='size-[113px] border-[7px] border-[#0E0E0E] bg-secondaryBackground rounded-full shadow-[0px_0px_48px_0px_#0E0E0E] grid place-content-center relative'
          >
            <span className='inline-block text-[#0E0E0E] text-[42.5px] font-dmSans font-semibold tracking-tight z-[1]'>
              03
            </span>
            <div className='size-[50px] bg-secondaryBackground absolute rounded-sm top-1/2 -translate-y-1/2 -right-[3px] rotate-45' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: isInView ? 1 : 0,
              scale: isInView ? 1 : 0.5,
              transition: {
                opacity: { duration: 1, delay: 2.85 },
                scale: {
                  type: "spring",
                  bounce: 0.5,
                  duration: 1,
                  delay: 2.85,
                },
              },
            }}
            className='flex-1 flex justify-start relative'
          >
            <img
              src='/pages/home/steps/step-3.svg'
              className='absolute left-[60%] bottom-0 translate-y-1/2'
              alt=''
            />
            <div className='inline-flex flex-col items-end justify-center -space-y-[1px] max-w-[440px] rotate-[3.7deg] '>
              <div className='bg-white px-[20px] py-[20px] inline-block rounded-[20px] w-full'>
                <img
                  src='/pages/home/steps/step-3.png'
                  className='rounded-[16px] w-full object-contain'
                  alt=''
                />
              </div>
              <div className='bg-white px-[20px] py-[20px] inline-block rounded-[20px] w-full space-y-3'>
                <h4 className='font-semibold font-dmSans text-[32px] tracking-tight text-[#0E0E0E] leading-none'>
                  Review & Launch
                </h4>
                <p className='text-[21px] font-dmSans text-[#0E0E0E] opacity-70 inline-block tracking-tight leading-tight'>
                  We’ll present the final design for your review and make any
                  necessary adjustments
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
