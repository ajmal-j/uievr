import GradientHeading from "@/components/ui/gradient-heading";
import GradientSubHeading from "@/components/ui/gradient-subHeading";
import { useEffect, useState } from "react";

const services = [
  "Web Designing",
  "eCommerce Development",
  "Mobile App Development",
  "ERP Development ",
  "Digital Marketing",
  "Search Engine Optimization",
];

export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className='centered-wrapper-custom-width max-w-[1300px] flex flex-col xl:gap-14 lg:gap-10 md:gap-8 sm:gap-6 gap-4'>
      <div className='inline-flex flex-col place-self-start max-w-[1100px]'>
        <GradientSubHeading>Our Service</GradientSubHeading>
        <GradientHeading>
          It&apos;s not about what we make, it&apos;s about how satisfied you are with our
          service
        </GradientHeading>
      </div>
      <div className='flex flex-wrap gap-6 sm:justify-start justify-center'>
        {services.map((service, index) => (
          <div key={service} className='inline-block relative z-0'>
            <h3
              className={`font-outfit xl:text-[60px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[26px] tracking-tight bg-gradient-to-b from-white v to-white/70 inline-block text-center px-4 py-5 rounded-2xl bg-clip-text leading-none text-transparent transition-all duration-500 ease-in-out border-b-[3px] ${
                activeIndex === index
                  ? "opacity-100 border-b-[#2CCA5D]"
                  : "opacity-60 border-b-white/20"
              }`}
            >
              {service}
            </h3>
            <div
              className={`inset-0 transition-all duration-200 ease-in-out absolute bg-gradient-to-b ${
                activeIndex === index
                  ? "from-[#FD8D68]/40 to-[#2CCA5D]"
                  : "from-transparent to-white/50"
              } rounded-2xl opacity-20 z-[-1]`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
