import GradientHeading from "@/components/ui/gradient-heading";
import GradientSubHeading from "@/components/ui/gradient-subHeading";
import { cn } from "@/lib/utils";
import { motion, useCycle } from "framer-motion";
import { useEffect } from "react";

const team = [
  {
    image: "/pages/home/images/our-team-1.png",
    name: "James Walker",
    role: "Web Developer",
    imageClassName: "md:ps-[15%] ps-[10%]",
  },
  {
    image: "/pages/home/images/our-team-3.png",
    name: "Dylan Paul",
    role: "Web Developer",
    imageClassName: "md:pe-12 pe-3",
  },
];

export default function OurTeam() {
  const [animatedIndex, cycleIndex] = useCycle(...team.map((_, i) => i));

  useEffect(() => {
    const interval = setInterval(() => {
      cycleIndex();
    }, 3000);
    return () => clearInterval(interval);
  }, [cycleIndex]);

  const animationVariants = {
    active: { y: [0, -25, 0], transition: { duration: 2, ease: "easeInOut" } },
    inactive: { y: 0 },
  };

  return (
    <div className='centered-wrapper-custom-width max-w-[1300px] flex flex-col sm:gap-10 gap-6 relative'>
      <div className='flex w-full flex-col place-self-center max-w-[1240px] xl:pb-10 lg:pb-8 md:pb-6 z-30'>
        <GradientSubHeading>Our Team</GradientSubHeading>
        <GradientHeading>Together, We Build the Future</GradientHeading>
      </div>
      <div className='grid grid-cols-2 lg:gap-12 md:gap-10 sm:gap-8 gap-5 z-[1]'>
        {team.map((member, index) => (
          <motion.div
            key={index}
            variants={animationVariants}
            animate={animatedIndex === index ? "active" : "inactive"}
            className='flex flex-col items-center max-w-[360px] w-full justify-end mx-auto'
          >
            <div className='relative flex items-end justify-center w-full overflow-hidden h-full'>
              <motion.img
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                viewport={{ once: true }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.1 * (index + 1),
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
                src={member.image}
                className={cn("z-[2] object-contain", member.imageClassName)}
                alt={`${member.name} image`}
              />
              <div className='absolute max-h-[70%] h-full left-0 right-0 bottom-0 bg-transparent xl:border-t-[28px] xl:border-l-[28px] xl:border-r-[28px] lg:border-t-[22px] lg:border-l-[22px] lg:border-r-[22px] md:border-t-[18px] md:border-l-[18px] md:border-r-[18px] sm:border-t-[14px] sm:border-l-[14px] sm:border-r-[14px] border-t-[12px] border-l-[12px] border-r-[12px] border-b-0 border-white w-full' />
            </div>
            <div className='text-center flex flex-col w-full bg-white lg:p-5 md:p-4 sm:p-3 p-2 font-dmSans text-black'>
              <h4 className='xl:text-[28px] lg:text-[22px] md:text-[18px] sm:text-[14px] text-[11px] font-bold'>
                {member.name}
              </h4>
              <h5 className='xl:text-[21px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[8px]'>
                {member.role}
              </h5>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
