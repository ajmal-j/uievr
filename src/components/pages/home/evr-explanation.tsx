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
      <div className='flex w-full flex-col place-self-center max-w-[1240px] pb-10'>
        <GradientSubHeading>Our Brand</GradientSubHeading>
        <GradientHeading>What, we are !</GradientHeading>
      </div>
      <div className='grid grid-cols-3'>
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
            <div className='flex items-center justify-center flex-col gap-3'>
              <h3 className='text-nowrap bg bg-gradient-to-r from-[#B9FD50] to-[#FFFFFF] inline-block text-transparent bg-clip-text px-[1px] text-[37px] text-center font-samsungSansBold'>
                {item.title}
              </h3>
              <p
                className={cn(
                  "text-[#969595] font-samsungSansMedium text-[21px] text-center",
                  item.className
                )}
              >
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className='flex items-center justify-between'>
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
          className='text-[136px] font-samsungSansBold text-transparent bg-[url("/pages/home/elements/explore-background.png")] bg-clip-text bg-center bg-cover'
        >
          explore.
        </motion.h1>
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
          className='text-[136px] font-samsungSansBold text-transparent bg-[url("/pages/home/elements/visualize-background.png")] bg-clip-text bg-center bg-cover'
        >
          visualize.
        </motion.h1>
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
          className='text-[136px] font-samsungSansBold text-transparent bg-[url("/pages/home/elements/explore-background.png")] bg-clip-text bg-center bg-cover'
        >
          refine.
        </motion.h1>
      </div>

      <div className='grid grid-cols-3'>
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
            <div className='flex items-center justify-center flex-col gap-3'>
              <h3 className='text-nowrap bg bg-gradient-to-r from-[#B9FD50] to-[#FFFFFF] inline-block text-transparent bg-clip-text px-[1px] text-[37px] text-center font-samsungSansBold'>
                {item.title}
              </h3>
              <p
                className={cn(
                  "text-[#969595] font-samsungSansMedium text-[21px] text-center",
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
        className='h-[150px] absolute top-1/2 left-[1.5%] -translate-y-[70%]'
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
        className='h-[200px] absolute top-1/2 left-[58%] -translate-y-[55%]'
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
        className='h-[190px] absolute top-1/2 right-[0%] -translate-y-[70%]'
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
        className='h-[120px] absolute top-1/2 left-[1%] translate-y-[150%]'
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
        className='h-[170px] absolute top-1/2 left-[30%] translate-y-[100%]'
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
        className='h-[290px] absolute top-1/2 right-[25%] translate-y-[40%]'
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
        className='h-[180px] absolute top-1/2 right-[0%] translate-y-[95%]'
        alt='connecting arrow'
      />
    </div>
  );
}
