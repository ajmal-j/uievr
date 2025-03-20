import GradientHeading from "@/components/ui/gradient-heading";
import GradientSubHeading from "@/components/ui/gradient-subHeading";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function OurWorks() {
  const [activeIndex, setActiveIndex] = useState(0);

  const setIndex = (index: number) => {
    if (index === activeIndex) {
      return;
    }

    setActiveIndex(index);
  };

  return (
    <div className="centered-wrapper flex flex-col sm:gap-10 gap-6" id="works">
      <div className="flex w-full flex-col place-self-center max-w-[1240px] xl:pb-10 lg:pb-8 md:pb-6">
        <GradientSubHeading>Our Works</GradientSubHeading>
        <GradientHeading>How, we can produce work </GradientHeading>
      </div>

      <ParallaxProvider>
        <motion.div
          layout
          className="w-full relative min-h-[min(100dvh,800px)] h-full"
        >
          <motion.div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center w-full md:gap-x-3 sm:gap-x-2 gap-x-1 pointer-events-none sm:space-y-0 -space-y-[100px] h-full">
            <ParallaxImage
              setIndex={setIndex}
              activeIndex={activeIndex}
              speed={10}
              index={1}
              path="/pages/home/images/works-parallax/1.png"
            />
            <ParallaxImage
              setIndex={setIndex}
              activeIndex={activeIndex}
              speed={20}
              index={2}
              path="/pages/home/images/works-parallax/3.png"
            />
            <ParallaxImage
              setIndex={setIndex}
              activeIndex={activeIndex}
              speed={-10}
              index={3}
              path="/pages/home/images/works-parallax/5.png"
            />
            <ParallaxImage
              setIndex={setIndex}
              activeIndex={activeIndex}
              speed={5}
              index={4}
              path="/pages/home/images/works-parallax/1.png"
            />
            <ParallaxImage
              setIndex={setIndex}
              activeIndex={activeIndex}
              speed={30}
              index={11}
              path="/pages/home/images/works-parallax/3.png"
            />
            <ParallaxImage
              setIndex={setIndex}
              activeIndex={activeIndex}
              speed={-10}
              index={12}
              path="/pages/home/images/works-parallax/1.png"
            />
            <ParallaxImage
              setIndex={setIndex}
              activeIndex={activeIndex}
              speed={10}
              index={13}
              path="/pages/home/images/works-parallax/3.png"
            />
            <ParallaxImage
              setIndex={setIndex}
              activeIndex={activeIndex}
              speed={25}
              index={14}
              path="/pages/home/images/works-parallax/5.png"
            />
          </motion.div>

          <motion.div className="absolute inset-0 grid sm:grid-cols-3 grid-cols-2 w-full md:gap-x-3 gap-x-1 items-center sm:max-h-[70%] max-h-[90%] my-auto sm:px-10 pointer-events-none">
            <ParallaxImage
              setIndex={setIndex}
              activeIndex={activeIndex}
              speed={30}
              index={5}
              path="/pages/home/images/works-parallax/2.png"
            />
            <ParallaxImage
              setIndex={setIndex}
              activeIndex={activeIndex}
              speed={-15}
              index={6}
              path="/pages/home/images/works-parallax/4.png"
            />
            <ParallaxImage
              setIndex={setIndex}
              activeIndex={activeIndex}
              speed={10}
              index={7}
              path="/pages/home/images/works-parallax/2.png"
            />
            <ParallaxImage
              setIndex={setIndex}
              activeIndex={activeIndex}
              speed={10}
              index={8}
              path="/pages/home/images/works-parallax/4.png"
            />
            <ParallaxImage
              setIndex={setIndex}
              activeIndex={activeIndex}
              speed={-5}
              index={9}
              path="/pages/home/images/works-parallax/2.png"
            />
            <ParallaxImage
              setIndex={setIndex}
              activeIndex={activeIndex}
              speed={-15}
              index={10}
              path="/pages/home/images/works-parallax/4.png"
            />
          </motion.div>
        </motion.div>
      </ParallaxProvider>
    </div>
  );
}

function ParallaxImage({
  className,
  path,
  setIndex,
  index,
  activeIndex,
  speed,
}: {
  className?: string;
  path: string;
  setIndex: (index: number) => void;
  index: number;
  activeIndex: number;
  speed: number;
}) {
  const isActive = activeIndex === index;

  return (
    <div className="col-span-1 2xl:min-h-[800px] xl:min-h-[770px] lg:min-h-[620px] md:min-h-[500px] sm:min-h-[500px] min-h-[410px] w-full h-full">
      <div
        className={
          activeIndex === index
            ? `fixed inset-0 grid place-content-center bg-black/70 z-10 p-3 pointer-events-auto`
            : `z-[1]`
        }
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setIndex(0);
        }}
      >
        <Parallax speed={activeIndex === index ? 0 : speed}>
          <motion.img
            layoutId={`parallax-image-${index}`}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              if (index === activeIndex) {
                setIndex(0);
              }
              setIndex(index);
            }}
            src={path}
            className={cn(
              `md:rounded-[11px] sm:rounded-[7px] rounded-[4px] md:border-[5px] sm:border-[3px] border-[2px] border-black object-contain object-top pointer-events-auto ${
                isActive ? "overflow-auto max-h-[90dvh]" : ""
              } bg-black`,
              !isActive && className
            )}
            alt=""
          ></motion.img>
        </Parallax>
      </div>
    </div>
  );
}
