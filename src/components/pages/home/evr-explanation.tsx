import "@/assets/fonts/style.css";
import GradientHeading from "@/components/ui/gradient-heading";
import GradientSubHeading from "@/components/ui/gradient-subHeading";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const data = [
  {
    title: "ux research",
    description:
      "Studying and evaluating the target audience while understanding their behavioral patterns, experience, interaction, and emotion.",
    className: "max-w-[400px]",
  },
  {
    title: "brand identity",
    description:
      "A strategic process to help your brand establish a platform-agnostic identity and presence.",
    className: "max-w-[304px]",
  },
  {
    title: "web development",
    description:
      "implementing the best combination of tech (full- stack, mern stack, native- OS) for your project.",
    className: "max-w-[300px]",
  },
];

export default function EvrExplanation() {
  return (
    <div className='centered-wrapper-custom-width max-w-[1700px] flex flex-col gap-10 relative'>
      <div className='flex w-full flex-col place-self-center max-w-[1240px] xl:pb-10 lg:pb-8 md:pb-6'>
        <GradientSubHeading>Our Brand</GradientSubHeading>
        <GradientHeading>What, we are !</GradientHeading>
      </div>
      <div className='md:grid hidden grid-cols-3 gap-3'>
        {data.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: 0.1 * (index + 1),
            }}
            key={index}
            className='flex items-start justify-center'
          >
            <div className='flex items-center justify-center flex-col sm:gap-3 gap-2'>
              <h3 className='text-nowrap bg bg-gradient-to-r from-[#B9FD50] to-[#FFFFFF] inline-block text-transparent bg-clip-text px-[1px] xl:text-[37px] lg:text-[30px] md:text-[24px] sm:text-[20px] text-[17px] text-center font-samsungSansBold'>
                {item.title}
              </h3>
              <p
                className={cn(
                  "text-[#969595] font-samsungSansMedium xl:text-[21px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] text-center md:leading-normal leading-tight",
                  item.className
                )}
              >
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className='flex items-center justify-between md:flex-row flex-col md:gap-0 gap-7'>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut", delay: 0.4 },
          }}
          viewport={{
            once: true,
          }}
          animate={{
            backgroundPosition: ["0% 40%", "0% 50%", "0% 40%"],
            transition: {
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            },
          }}
          className='2xl:text-[136px] xl2:text-[130px] xl1:text-[120px] lg2:text-[100px] lg1:text-[80px] md2:text-[70px] text-[58px] font-samsungSansBold text-transparent bg-[url("/pages/home/elements/explore-background.png")] bg-clip-text bg-center bg-cover md:block hidden'
        >
          explore.
        </motion.h1>

        {data.map((item, index) => {
          const elements = [
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.1 * (index + 1),
              }}
              key={index}
              className={`md:hidden flex items-start justify-center max-w-[230px] ${
                index % 2 === 0 ? "me-auto" : "ms-auto"
              }`}
            >
              <div className='flex items-center justify-center flex-col sm:gap-3 gap-2'>
                <h3 className='text-nowrap bg bg-gradient-to-r from-[#B9FD50] to-[#FFFFFF] inline-block text-transparent bg-clip-text px-[1px] xl:text-[37px] lg:text-[30px] md:text-[24px] sm:text-[20px] text-[17px] text-center font-samsungSansBold'>
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "text-[#969595] font-samsungSansMedium xl:text-[21px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] text-center md:leading-normal leading-tight",
                    item.className
                  )}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>,
          ];

          if (index === 0) {
            elements.push(
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 2, ease: "easeInOut", delay: 0.4 },
                }}
                viewport={{
                  once: true,
                }}
                animate={{
                  backgroundPosition: ["0% 40%", "0% 50%", "0% 40%"],
                  transition: {
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut",
                  },
                }}
                className='text-[min(180px,20vw)] font-samsungSansBold text-transparent bg-[url("/pages/home/elements/explore-background.png")] bg-clip-text bg-center bg-cover md:hidden'
              >
                explore.
              </motion.h1>
            );
          }

          return elements;
        })}

        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut", delay: 1.2 },
          }}
          viewport={{
            once: true,
          }}
          animate={{
            backgroundSize: ["80% 80%", "95% 95%", "80% 80%"],
            transition: {
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            },
          }}
          className='2xl:text-[136px] xl2:text-[130px] xl1:text-[120px] lg2:text-[100px] lg1:text-[80px] md2:text-[70px] md:text-[58px] text-[min(180px,20vw)] font-samsungSansBold text-transparent bg-[url("/pages/home/elements/visualize-background.png")] bg-clip-text bg-center bg-cover'
        >
          visualize.
        </motion.h1>

        {data.map((item, index) => {
          const elements = [
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.1 * (index + 1),
              }}
              key={index}
              className={`md:hidden flex items-start justify-center max-w-[230px] ${
                index % 2 !== 0 ? "me-auto" : "ms-auto"
              }`}
            >
              <div className='flex items-center justify-center flex-col sm:gap-3 gap-2'>
                <h3 className='text-nowrap bg bg-gradient-to-r from-[#B9FD50] to-[#FFFFFF] inline-block text-transparent bg-clip-text px-[1px] xl:text-[37px] lg:text-[30px] md:text-[24px] sm:text-[20px] text-[17px] text-center font-samsungSansBold'>
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "text-[#969595] font-samsungSansMedium xl:text-[21px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] text-center md:leading-normal leading-tight",
                    item.className
                  )}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>,
          ];

          if (index === 1) {
            elements.push(
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 2, ease: "easeInOut", delay: 1.6 },
                }}
                viewport={{
                  once: true,
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "0% 40%", "0% 50%"],
                  transition: {
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut",
                  },
                }}
                className='text-[min(180px,20vw)] font-samsungSansBold text-transparent bg-[url("/pages/home/elements/explore-background.png")] bg-clip-text bg-center bg-cover md:hidden'
              >
                refine.
              </motion.h1>
            );
          }

          return elements;
        })}

        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut", delay: 2.2 },
          }}
          viewport={{
            once: true,
          }}
          animate={{
            backgroundPosition: ["0% 50%", "0% 40%", "0% 50%"],
            transition: {
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut",
            },
          }}
          className='2xl:text-[136px] xl2:text-[130px] xl1:text-[120px] lg2:text-[100px] lg1:text-[80px] md2:text-[70px] text-[58px] font-samsungSansBold text-transparent bg-[url("/pages/home/elements/explore-background.png")] bg-clip-text bg-center bg-cover md:block hidden'
        >
          refine.
        </motion.h1>
      </div>

      <div className='md:grid hidden grid-cols-3 gap-3'>
        {data.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: 0.1 * (index + 4),
            }}
            key={index + 3}
            className='flex items-start justify-center'
          >
            <div className='flex items-center justify-center flex-col sm:gap-3 gap-2'>
              <h3 className='text-nowrap bg bg-gradient-to-r from-[#B9FD50] to-[#FFFFFF] inline-block text-transparent bg-clip-text px-[1px] xl:text-[37px] lg:text-[30px] md:text-[24px] sm:text-[20px] text-[17px] text-center font-samsungSansBold'>
                {item.title}
              </h3>
              <p
                className={cn(
                  "text-[#969595] font-samsungSansMedium xl:text-[21px] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px] text-center md:leading-normal leading-tight",
                  item.className
                )}
              >
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.img
        initial={{
          opacity: 0,
        }}
        viewport={{
          once: true,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 2,
            ease: "easeInOut",
            delay: 3,
          },
        }}
        src='/pages/home/elements/1.svg'
        className='h-[min(150px,8dvw)] absolute md:block hidden md:top-1/2 md:left-[1.5%] 2xl:-translate-y-[60%] xl:-translate-y-[40%] lg:-translate-y-[30%] md:-translate-y-[25%]'
        alt='connecting arrow'
      />
      <motion.img
        initial={{
          opacity: 0,
        }}
        viewport={{
          once: true,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 2,
            ease: "easeInOut",
            delay: 3,
          },
        }}
        src='/pages/home/elements/2.svg'
        className='h-[min(200px,10dvw)] absolute md:block hidden md:top-1/2 md:left-[58%] 2xl:-translate-y-[55%] xl:-translate-y-[45%] lg:-translate-y-[40%] md:-translate-y-[55%]'
        alt='connecting arrow'
      />
      <motion.img
        initial={{
          opacity: 0,
        }}
        viewport={{
          once: true,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 2,
            ease: "easeInOut",
            delay: 3,
          },
        }}
        src='/pages/home/elements/3.svg'
        className='h-[min(190px,10dvw)] absolute md:block hidden md:top-1/2 md:right-[0%] 2xl:-translate-y-[70%] xl:-translate-y-[60%] lg:-translate-y-[50%] md:-translate-y-[40%]'
        alt='connecting arrow'
      />
      <motion.img
        initial={{
          opacity: 0,
        }}
        viewport={{
          once: true,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 2,
            ease: "easeInOut",
            delay: 3,
          },
        }}
        src='/pages/home/elements/4-1.svg'
        className='h-[min(120px,8dvw)] absolute md:block hidden md:top-1/2 md:left-[1%] 2xl:translate-y-[150%] xl:translate-y-[145%] lg:translate-y-[155%] md:translate-y-[170%]'
        alt='connecting arrow'
      />
      <motion.img
        initial={{
          opacity: 0,
        }}
        viewport={{
          once: true,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 2,
            ease: "easeInOut",
            delay: 3,
          },
        }}
        src='/pages/home/elements/4-2.svg'
        className='h-[min(170px,10dvw)] absolute md:block hidden md:top-1/2 md:left-[30%] 2xl:translate-y-[100%] xl:translate-y-[107%] lg:translate-y-[120%] md:translate-y-[132%]'
        alt='connecting arrow'
      />
      <motion.img
        initial={{
          opacity: 0,
        }}
        viewport={{
          once: true,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 2,
            ease: "easeInOut",
            delay: 3,
          },
        }}
        src='/pages/home/elements/5.svg'
        className='h-[min(290px,15dvw)] absolute md:block hidden md:top-1/2 md:right-[25%] 2xl:translate-y-[43%] xl:translate-y-[50%] lg:translate-y-[60%] md:translate-y-[70%]'
        alt='connecting arrow'
      />
      <motion.img
        initial={{
          opacity: 0,
        }}
        viewport={{
          once: true,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 2,
            ease: "easeInOut",
            delay: 3,
          },
        }}
        src='/pages/home/elements/6.svg'
        className='h-[min(180px,8dvw)] absolute md:block hidden md:top-1/2 md:right-[0%] 2xl:translate-y-[95%] xl:translate-y-[125%] lg:translate-y-[140%] md:translate-y-[160%]'
        alt='connecting arrow'
      />
    </div>
  );
}
