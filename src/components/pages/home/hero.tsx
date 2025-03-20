/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Header from "../../layouts/header";
import HeroGradientSvg from "./hero-gradient-svg";

export default function Hero() {
  const contactNumber: number = +917994551553;
  const whatsappUrl = `https://wa.me/${contactNumber}`;

  return (
    <div className="xl:min-h-[max(950px,100dvh)] lg:min-h-[max(800px,100dvh)] min-h-[max(600px,100dvh)] flex flex-col gap-5 items-center justify-between h-full font-dmSans relative">
      <HeroGradientSvg />
      <Header className="opacity-0 static" />
      <motion.div
        initial={{ opacity: 0.3, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          delay: 0.05,
          type: "spring",
          bounce: 0.3,
          damping: 15,
        }}
        className="flex flex-col justify-center items-center xl:text-[132px] lg:text-[120px] md:text-[100px] sm:text-[70px] text-[55px] tracking-tight z-10"
      >
        <h1 className="bg-gradient-to-b from-white via-white to-[#999999] bg-clip-text text-transparent text-center leading-none sm:-mb-3 -mb-1 relative">
          <motion.div
            initial={{
              height: "100%",
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            whileInView={{
              height: "0%",
            }}
            viewport={{ once: true }}
            className="absolute inset-0 bg-[#B9FD50]"
          />
          We build
        </h1>
        <h1 className="font-bold bg-gradient-to-b from-white via-white to-[#999999] bg-clip-text text-transparent text-center leading-none lg:pb-2 sm:pb-3 pb-2 relative">
          <motion.div
            initial={{
              width: "100%",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            whileInView={{
              width: "0%",
            }}
            viewport={{ once: true }}
            className="absolute inset-0 bg-[#B9FD50] ms-auto"
          />
          stunning
        </h1>
        <h1 className="bg-gradient-to-b from-white via-white to-[#999999] bg-clip-text text-transparent text-center leading-none sm:-mt-6 -mt-2 relative">
          <motion.div
            initial={{
              width: "100%",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            whileInView={{
              width: "0%",
            }}
            viewport={{ once: true }}
            className="absolute inset-0 bg-[#B9FD50]"
          />
          apps & websites
        </h1>
      </motion.div>
      <div className="w-full xl:px-20 lg:px-10 sm:px-8 px-5 flex flex-col items-center justify-center lg:pt-10 sm:pt-6 pt-4 pb-5 lg:gap-1 gap-5 z-10">
        <motion.button
          onClick={() => {
            document
              .querySelector("#works")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
          className="xl:size-[132px] lg:size-[120px] md:size-[100px] size-[70px] border grid place-content-center border-white rounded-full"
        >
          <motion.svg
            animate={{
              y: [0, 5, 0],
              opacity: [1, 0.7, 1],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
            viewBox="0 0 28 28"
            className={"w-auto xl:h-[28px] lg:h-[24px] md:h-[20px] h-[15px]"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L13.6984 13.6984L26.3968 1"
              stroke="white"
              strokeWidth="1.26984"
              strokeLinecap="round"
            />
            <path
              d="M1 13.6982L13.6984 26.3967L26.3968 13.6982"
              stroke="white"
              strokeWidth="1.26984"
              strokeLinecap="round"
            />
          </motion.svg>
        </motion.button>
        <div className="w-full flex items-center justify-between">
          <div className="flex-1 flex justify-start items-center">
            <button className="flex items-center justify-center md:gap-5 sm:gap-3 gap-1.5 bg-[#121031] md:px-7 sm:px-6 px-5 md:py-5 sm:py-4 py-3 md:rounded-[25px] sm:rounded-[20px] rounded-[15px]">
              <span className="inline-block font-urbanist font-black text-white uppercase md:text-[17px] sm:text-[15px] text-[10px]">
                Rating 4.9
              </span>
              <img
                src="/pages/home/logos/rating-switch-logo.png"
                className="md:h-[40px] sm:h-[30px] h-[20px] object-contain"
                alt="Rating users logo"
              />
            </button>
          </div>
          <div className="lg:flex hidden flex-1 items-center justify-center">
            <div>
              <span className="h-[30px] px-3 py-1 rounded-full leading-none uppercase text-white font-urbanist lg:text-[15px] text-[12px] text-center border border-white">
                We
              </span>
            </div>
            <div>
              <span className="h-[30px] px-3 py-1 rounded-full leading-none uppercase text-white font-urbanist lg:text-[15px] text-[12px] text-center border border-white">
                Ui
              </span>
            </div>
            <div>
              <span className="h-[30px] px-3 py-1 rounded-full leading-none uppercase text-white font-urbanist lg:text-[15px] text-[12px] text-center border border-white">
                Ever
              </span>
            </div>
          </div>
          <div className="flex-1 flex justify-end items-center'">
            <div className="bg-gradient-to-br from-[#2CCA5D]/40 via-white/10 to-transparent p-[2px] rounded-full">
              <a
                href={whatsappUrl}
                target="_blank"
                className="relative flex items-center justify-center md:gap-5 sm:gap-3 gap-1.5 rounded-full md:px-7 sm:px-6 px-5 md:py-5 sm:py-4 py-3 bg-gradient-to-b from-[#21202E] to-[#080716] overflow-hidden"
              >
                <img
                  src="/pages/home/icons/whatsapp-icon.svg"
                  className="md:w-[33px] sm:w-[27px] w-[18px] object-contain"
                  alt="Whatsapp logo"
                />
                <h4 className="text-white font-black font-urbanist uppercase md:text-[17px] sm:text-[15px] text-[10px] text-nowrap leading-none">
                  Chat with us
                </h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
