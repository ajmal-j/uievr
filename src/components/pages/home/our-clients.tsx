import GradientHeading from "@/components/ui/gradient-heading";
import GradientSubHeading from "@/components/ui/gradient-subHeading";

export default function OurClients() {
  return (
    <div className='centered-wrapper flex flex-col gap-14'>
      <div className='inline-flex flex-col place-self-center'>
        <GradientSubHeading>Our Clients</GradientSubHeading>
        <GradientHeading>Realizing Visions with Our Clients</GradientHeading>
      </div>
      <div className='space-y-3'>
        <ImageScroll />
        <h5 className='text-white font-urbanist font-medium text-center opacity-80'>
          Trusted by 400+ Clients and 20 Company.
        </h5>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";

const images = [
  "/pages/home/logos/slider-image-6.png",
  "/pages/home/logos/slider-image-7.png",
  "/pages/home/logos/slider-image-1.png",
  "/pages/home/logos/slider-image-5.png",
  "/pages/home/logos/slider-image-3.png",
  "/pages/home/logos/slider-image-4.png",
  "/pages/home/logos/slider-image-2.png",
];

const ImageScroll = () => {
  return (
    <div className='flex items-center justify-between'>
      {images.map((src, index) => (
        <motion.div
          key={index}
          // initial={{ x: 0 }}
          // animate={{ x: "-50%" }}
          // transition={{
          //   duration: 5,
          //   ease: "linear",
          //   repeat: Infinity,
          //   repeatType: "loop",
          // }}
        >
          <img
            src={src}
            alt={`image-${index}`}
            className='object-contain w-full px-4'
          />
        </motion.div>
      ))}
    </div>
  );
};
