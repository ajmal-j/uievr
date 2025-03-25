/* eslint-disable @next/next/no-img-element */
import GradientHeading from "@/components/ui/gradient-heading";
import GradientSubHeading from "@/components/ui/gradient-subHeading";
import { motion } from "framer-motion";

export default function OurTools() {
  return (
    <div className="centered-wrapper-custom-padding flex flex-col xl:gap-14 lg:gap-10 md:gap-8 sm:gap-6 gap-4 lg:py-16 xl:py-12 py-8">
      <div className="inline-flex flex-col md:place-self-center place-self-start lg:px-7 px-5">
        <GradientSubHeading>Our Tools</GradientSubHeading>
        <GradientHeading>Technology we&apos;re using.</GradientHeading>
      </div>
      <ImageScroll />
    </div>
  );
}

const images = [
  "/pages/home/integrations/5.svg",
  "/pages/home/integrations/6.svg",
  "/pages/home/integrations/7.svg",
  "/pages/home/integrations/8.svg",
  "/pages/home/integrations/9.svg",
  "/pages/home/integrations/10.svg",
  "/pages/home/integrations/11.svg",
  "/pages/home/integrations/12.svg",
  "/pages/home/integrations/13.svg",
  "/pages/home/integrations/14.svg",
  "/pages/home/integrations/15.svg",
  "/pages/home/integrations/18.svg",
  "/pages/home/integrations/20.svg",
  "/pages/home/integrations/21.svg",
  "/pages/home/integrations/22.svg",
  "/pages/home/integrations/23.svg",
  "/pages/home/integrations/24.svg",
  "/pages/home/integrations/25.svg",
  "/pages/home/integrations/27.svg",
  "/pages/home/integrations/28.svg",
  "/pages/home/integrations/29.svg",
  "/pages/home/integrations/3.svg",
];

const ImageScroll = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex items-center justify-start"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <ImageCard index={1} />
        <ImageCard index={2} />
        <ImageCard index={3} />
      </motion.div>
    </div>
  );
};

function ImageCard({ index = 1 }: { index: number }) {
  return images
    .concat(images)
    .map((src, i) => (
      <img
        src={src}
        key={i + images.length * index}
        alt={`image-${i + images.length * index}`}
        className="object-contain xl:h-[70px] lg:h-[55px] md:h-[40px] sm:h-[35px] h-[30px] xl:mx-12 lg:mx-10 md:mx-8 mx-6 xl:max-w-[180px] lg:max-w-[150px] md:max-w-[130px] sm:max-w-[110px] max-w-[80px]"
      />
    ));
}
