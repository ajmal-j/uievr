/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import SVGAnimation from "./svg-animation";
import { motion, useInView } from "framer-motion";
import { useInView as useInViewObserver } from "react-intersection-observer";

export default function StepsToWorkWithUs() {
  const stepRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(stepRef, {
    once: true,
  });

  const [cardInView, setCardInView] = useState<
    "card1" | "card2" | "card3" | null
  >(null);

  const { ref: stepCard1, inView: isCard1InView } = useInViewObserver({
    threshold: 0.9,
  });
  const { ref: stepCard2, inView: isCard2InView } = useInViewObserver({
    threshold: 0.9,
  });
  const { ref: stepCard3, inView: isCard3InView } = useInViewObserver({
    threshold: 0.9,
  });

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setCardInView(null);
      return;
    }

    if (isCard1InView) {
      setCardInView("card1");
    } else if (isCard2InView) {
      setCardInView("card2");
    } else if (isCard3InView) {
      setCardInView("card3");
    }
  }, [isCard1InView, isCard2InView, isCard3InView]);

  return (
    <div className="w-full xl:space-y-32 lg:space-y-24 md:space-y-20 sm:space-y-16 space-y-6">
      <div>
        <h2 className="text-white font-bold font-dmSans text-center px-4 xl:text-[74px] lg:text-[60px] md:text-[50px] sm:text-[40px] text-[30px] tracking-tight">
          3 Step to work with us
        </h2>
        <p className="xl:text-[21px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] text-white font-dmSans text-center px-4 tracking-tight opacity-60">
          Effortless Steps to Start Your Project
        </p>
      </div>
      <motion.div
        animate={{
          translateX:
            cardInView === "card1"
              ? "-46%"
              : cardInView === "card2"
              ? window.innerWidth >= 640
                ? "46%"
                : "-4%"
              : cardInView === "card3"
              ? "-46%"
              : "0%",
        }}
        className="sm:w-full w-[200dvw] relative"
        ref={stepRef}
      >
        <SVGAnimation />
        <div
          ref={stepCard1}
          className="absolute top-[-10%] -translate-y-1/2 left-0 right-0"
        />
        <div
          ref={stepCard2}
          className="absolute top-[45%] -translate-y-1/2 left-0 right-0"
        />
        <div
          ref={stepCard3}
          className="absolute top-[70%] -translate-y-1/2 left-0 right-0"
        />
        <div className="flex items-center justify-center absolute top-[20%] -translate-y-1/2 left-0 right-0 xl:gap-20 lg:gap-16 md:gap-12 sm:gap-10 gap-4">
          <div className="flex-1"></div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: isInView ? 1 : 0,
              transition: { delay: 1.8, duration: 0.2 },
            }}
            className="xl:size-[113px] lg:size-[90px] md:size-[70px] sm:size-[50px] size-[40px] xl:border-[7px] lg:border-[5px] md:border-[3px] sm:border-[2px] border-[1px] border-[#0E0E0E] bg-[#B9FD50] rounded-full shadow-[0px_0px_48px_0px_#0E0E0E] grid place-content-center relative shrink-0"
          >
            <span className="inline-block text-[#0E0E0E] xl:text-[42.5px] lg:text-[35px] md:text-[27px] sm:text-[20px] text-[14px] font-dmSans font-semibold tracking-tight z-[1]">
              01
            </span>
            <div className="xl:size-[50px] lg:size-[40px] md:size-[30px] sm:size-[15px] size-[10px] bg-[#B9FD50] absolute md:rounded-sm sm:rounded-xs rounded-[2px] top-1/2 -translate-y-1/2 -right-[3px] rotate-45" />
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
            className="flex-1 flex justify-start relative object-center"
          >
            <img
              src="/pages/home/steps/step-1.svg"
              className="absolute left-[60%] top-0 -translate-x-1/4 -translate-y-1/2 lg:block hidden"
              alt=""
            />
            <div className="inline-flex flex-col items-start justify-center -space-y-[1px] max-w-[440px] sm:rotate-[3.7deg] rotate-[3deg] w-min">
              <div className="bg-white xl:p-[20px] lg:p-[20px] md:p-[18px] sm:p-[17px] p-[15px] inline-block rounded-[20px]">
                <img
                  src="/pages/home/steps/step-1.png"
                  className="rounded-[16px] object-contain xl:max-w-[400px] lg:max-w-[300px] md:max-w-[250px] sm:max-w-[200px] max-w-[230px]"
                  alt=""
                />
              </div>
              <div className="bg-white xl:p-[20px] lg:p-[20px] md:p-[18px] sm:p-[17px] p-[15px] inline-block rounded-[20px] w-full space-y-3">
                <h4 className="font-semibold font-dmSans xl:text-[32px] lg:text-[24px] md:text-[20px] sm:text-[18px] text-[16px] tracking-tight text-[#0E0E0E] leading-none">
                  Consultation
                </h4>
                <p className="xl:text-[21px] lg:text-[17px] md:text-[14px] sm:text-[10px] font-dmSans text-[#0E0E0E] opacity-70 inline-block tracking-tight leading-tight">
                  Begin with a discovery call to understand your project needs,
                  goals, and vision. We’ll discuss your requirements, timelines,
                  and budget, ensuring everything is aligned.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-0 right-0 xl:gap-20 lg:gap-16 md:gap-12 sm:gap-10 gap-4">
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
            className="flex-1 flex justify-end relative"
          >
            <img
              src="/pages/home/steps/step-2.svg"
              className="absolute right-[60%] bottom-0 translate-x-1/2 translate-y-[100%] lg:block hidden"
              alt=""
            />
            <div className="inline-flex flex-col items-end justify-center -space-y-[1px] max-w-[440px] sm:rotate-[-3.7deg] rotate-[-3deg] w-min">
              <div className="bg-white px-[20px] py-[20px] inline-block rounded-[20px] w-min">
                <img
                  src="/pages/home/steps/step-2.png"
                  className="rounded-[16px] object-contain xl:max-w-[400px] lg:max-w-[300px] md:max-w-[250px] sm:max-w-[200px] max-w-[230px]"
                  alt=""
                />
              </div>
              <div className="bg-white xl:p-[20px] lg:p-[20px] md:p-[18px] sm:p-[17px] p-[15px] inline-block rounded-[20px] w-full space-y-3">
                <h4 className="font-semibold font-dmSans xl:text-[32px] lg:text-[24px] md:text-[20px] sm:text-[18px] text-[16px] tracking-tight text-[#0E0E0E] leading-none">
                  Design & Development
                </h4>
                <p className="xl:text-[21px] lg:text-[17px] md:text-[14px] sm:text-[10px] font-dmSans text-[#0E0E0E] opacity-70 inline-block tracking-tight leading-tight">
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
            className="xl:size-[113px] lg:size-[90px] md:size-[70px] sm:size-[50px] size-[40px] xl:border-[7px] lg:border-[5px] md:border-[3px] sm:border-[2px] border-[1px] border-[#0E0E0E] bg-[#B9FD50] rounded-full shadow-[0px_0px_48px_0px_#0E0E0E] grid place-content-center relative shrink-0"
          >
            <span className="inline-block text-[#0E0E0E] xl:text-[42.5px] lg:text-[35px] md:text-[27px] sm:text-[20px] text-[14px] font-dmSans font-semibold tracking-tight z-[1]">
              02
            </span>
            <div className="xl:size-[50px] lg:size-[40px] md:size-[30px] sm:size-[15px] size-[10px] bg-[#B9FD50] absolute md:rounded-sm sm:rounded-xs rounded-[2px] top-1/2 -translate-y-1/2 -left-[3px] rotate-45" />
          </motion.div>
          <div className="flex-1"></div>
        </div>

        <div className="flex items-center justify-center absolute top-[80%] -translate-y-1/2 left-0 right-0 xl:gap-20 lg:gap-16 md:gap-12 sm:gap-10 gap-4">
          <div className="flex-1"></div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: isInView ? 1 : 0,
              transition: { delay: 2.9, duration: 0.2 },
            }}
            className="xl:size-[113px] lg:size-[90px] md:size-[70px] sm:size-[50px] size-[40px] xl:border-[7px] lg:border-[5px] md:border-[3px] sm:border-[2px] border-[1px] border-[#0E0E0E] bg-[#B9FD50] rounded-full shadow-[0px_0px_48px_0px_#0E0E0E] grid place-content-center relative shrink-0"
          >
            <span className="inline-block text-[#0E0E0E] xl:text-[42.5px] lg:text-[35px] md:text-[27px] sm:text-[20px] text-[14px] font-dmSans font-semibold tracking-tight z-[1]">
              03
            </span>
            <div className="xl:size-[50px] lg:size-[40px] md:size-[30px] sm:size-[15px] size-[10px] bg-[#B9FD50] absolute md:rounded-sm sm:rounded-xs rounded-[2px] top-1/2 -translate-y-1/2 -right-[3px] rotate-45" />
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
            className="flex-1 flex justify-start relative"
          >
            <img
              src="/pages/home/steps/step-3.svg"
              className="absolute left-[60%] bottom-0 translate-y-1/2 lg:block hidden"
              alt=""
            />
            <div className="inline-flex flex-col items-end justify-center -space-y-[1px] max-w-[440px] sm:rotate-[3.7deg] rotate-[3deg] w-min">
              <div className="bg-white px-[20px] py-[20px] inline-block rounded-[20px] w-min">
                <img
                  src="/pages/home/steps/step-3.png"
                  className="rounded-[16px] object-contain xl:max-w-[400px] lg:max-w-[300px] md:max-w-[250px] sm:max-w-[200px] max-w-[230px]"
                  alt=""
                />
              </div>
              <div className="bg-white xl:p-[20px] lg:p-[20px] md:p-[18px] sm:p-[17px] p-[15px] inline-block rounded-[20px] w-full space-y-3">
                <h4 className="font-semibold font-dmSans xl:text-[32px] lg:text-[24px] md:text-[20px] sm:text-[18px] text-[16px] tracking-tight text-[#0E0E0E] leading-none">
                  Review & Launch
                </h4>
                <p className="xl:text-[21px] lg:text-[17px] md:text-[14px] sm:text-[10px] font-dmSans text-[#0E0E0E] opacity-70 inline-block tracking-tight leading-tight">
                  We’ll present the final design for your review and make any
                  necessary adjustments
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
