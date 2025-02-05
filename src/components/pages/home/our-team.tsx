import { motion } from "framer-motion";
import GradientHeading from "@/components/ui/gradient-heading";
import GradientSubHeading from "@/components/ui/gradient-subHeading";
import { cn } from "@/lib/utils";

const team = [
  {
    image: "/pages/home/images/our-team-1.png",
    name: "James Walker",
    role: "Web Developer",
    imageClassName: "ps-[15%]",
  },
  {
    image: "/pages/home/images/our-team-2.png",
    name: "Jessica Dean",
    role: "Ui Designer",
    imageClassName: "pe-3",
  },
  {
    image: "/pages/home/images/our-team-3.png",
    name: "Dylan Paul",
    role: "Web Developer",
    imageClassName: "pe-12",
  },
];

export default function OurTeam() {
  return (
    <div className='centered-wrapper-custom-width max-w-[1300px] flex flex-col gap-10 relative'>
      <div className='flex w-full flex-col place-self-center max-w-[1240px] pb-10 z-10'>
        <GradientSubHeading>Our Team</GradientSubHeading>
        <GradientHeading>Together, We Build the Future</GradientHeading>
      </div>
      <img
        src='/pages/home/images/our-team.gif'
        className='absolute left-1/2 translate-x-[-50%] z-0 top-[140px] object-contain h-[85%]'
        alt='our team background gif'
      />
      <div className='grid grid-cols-3 gap-12 z-[1]'>
        {team.map((member, index) => (
          <div
            key={index}
            className='flex flex-col items-center max-w-[360px] w-full justify-end'
          >
            <div className='relative flex items-end justify-center w-full overflow-hidden'>
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
              <div className='absolute h-[350px] left-0 right-0 bottom-0 bg-transparent border-[28px] border-b-0 border-white w-full' />
            </div>
            <div className='text-center flex flex-col w-full bg-white p-5 font-dmSans text-black'>
              <h4 className='text-[28px] font-bold'>{member.name}</h4>
              <h5 className='text-[21px]'>{member.role}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
