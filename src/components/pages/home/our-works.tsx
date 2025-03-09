import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GradientHeading from "@/components/ui/gradient-heading";
import GradientSubHeading from "@/components/ui/gradient-subHeading";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const works = [
  {
    image: "/pages/home/images/works-1.png",
    title: "Faces of Resilience",
    date: "March 2022",
  },
  {
    image: "/pages/home/images/works-2.png",
    title: "Product Elegance",
    date: "January 2020",
  },
  {
    image: "/pages/home/images/works-3.png",
    title: "A Wedding Tale",
    date: "January 2020",
  },
];

export default function OurWorks() {
  const [activeIndex, setActiveIndex] = useState(0);

  const setIndex = (index: number) => {
    if (index === activeIndex) {
      return;
    }

    setActiveIndex(index);
  };

  return (
    <div className='centered-wrapper flex flex-col sm:gap-10 gap-6' id='works'>
      <div className='flex w-full flex-col place-self-center max-w-[1240px] xl:pb-10 lg:pb-8 md:pb-6'>
        <GradientSubHeading>Our Works</GradientSubHeading>
        <GradientHeading>How, we can produce work </GradientHeading>
      </div>

      <div></div>

      {/* <div className='lg:grid hidden grid-cols-3 xl:gap-12 lg:gap-8 md:gap-6 sm:gap-4 gap-2'>
        {works.map((work, index) => (
          <div key={index} className='flex flex-col gap-5 w-full'>
            <div className='flex-1'>
              <img
                src={work.image}
                className='xl:rounded-[20px] lg:rounded-[15px] md:rounded-[10px] sm:rounded-[5px] w-full object-contain'
                alt={`${work.title} image`}
              />
            </div>
            <div className='flex-1 flex items-start justify-between gap-4'>
              <div className='font-dmSans'>
                <h3 className='text-[#CACACE] xl:text-xl lg:text-lg md:text-base sm:text-sm text-[11px] font-medium'>
                  {work.title}
                </h3>
                <p className='text-[#797C86] xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10.5px]'>
                  {work.date}
                </p>
              </div>
              <div className='flex items-center lg:gap-3 md:gap-2 gap-1.5 uppercase border-b-[1px] border-b-[#2F2F37] pb-[2px]'>
                <span className='text-[#F2F2F3] font-medium xl:text-lg lg:text-sm md:text-xs text-[10.5px] font-outfit'>
                  View Project
                </span>
                <img
                  src='/pages/home/icons/arrow-top-right.svg'
                  className='xl:w-[16.5px] lg:w-[14px] md:w-[12px] sm:w-[10px] w-[8px] object-contain'
                  alt='Arrow top right icon'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='lg:hidden'>
        <Carousel>
          <CarouselContent className='w-full'>
            {[...works, ...works].map((work, index) => (
              <CarouselItem className='max-w-[300px]'>
                <div key={index} className='flex flex-col gap-5 w-full'>
                  <div className='flex-1'>
                    <img
                      src={work.image}
                      className='min-w-[240px] rounded-md w-full object-contain'
                      alt={`${work.title} image`}
                    />
                  </div>
                  <div className='flex-1 flex items-start justify-between gap-4'>
                    <div className='font-dmSans'>
                      <h3 className='text-[#CACACE] xl:text-xl lg:text-lg md:text-base sm:text-sm text-[11px] font-medium'>
                        {work.title}
                      </h3>
                      <p className='text-[#797C86] xl:text-lg lg:text-base md:text-sm sm:text-xs text-[10.5px]'>
                        {work.date}
                      </p>
                    </div>
                    <div className='flex items-center lg:gap-3 md:gap-2 gap-1.5 uppercase border-b-[1px] border-b-[#2F2F37] pb-[2px]'>
                      <span className='text-[#F2F2F3] font-medium xl:text-lg lg:text-sm md:text-xs text-[10.5px] font-outfit'>
                        View Project
                      </span>
                      <img
                        src='/pages/home/icons/arrow-top-right.svg'
                        className='xl:w-[16.5px] lg:w-[14px] md:w-[12px] sm:w-[10px] w-[8px] object-contain'
                        alt='Arrow top right icon'
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div> */}

      <ParallaxProvider>
        <motion.div
          layout
          className='w-full relative min-h-[min(100dvh,800px)]'
        >
          <div
            className={
              activeIndex === 1
                ? "fixed inset-0 grid place-content-center bg-black/70 z-10"
                : "z-[1]"
            }
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIndex(0);
            }}
          >
            <Parallax speed={activeIndex === 1 ? 0 : 30}>
              <ParalaxImage
                setIndex={setIndex}
                isActive={activeIndex === 1}
                index={1}
                className='left-[40%]'
                path='/pages/home/images/works-parallax/1.png'
              />
            </Parallax>
          </div>

          <div
            className={
              activeIndex === 2
                ? "fixed inset-0 grid place-content-center bg-black/70 z-10"
                : "z-[1]"
            }
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIndex(0);
            }}
          >
            <Parallax speed={activeIndex === 2 ? 0 : 25}>
              <ParalaxImage
                setIndex={setIndex}
                isActive={activeIndex === 2}
                index={2}
                className='left-[0%]'
                path='/pages/home/images/works-parallax/3.png'
              />
            </Parallax>
          </div>

          <div
            className={
              activeIndex === 3
                ? "fixed inset-0 grid place-content-center bg-black/70 z-10"
                : "z-[1]"
            }
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIndex(0);
            }}
          >
            <Parallax speed={activeIndex === 3 ? 0 : 10}>
              <ParalaxImage
                setIndex={setIndex}
                isActive={activeIndex === 3}
                index={3}
                className='left-[20%]'
                path='/pages/home/images/works-parallax/2.png'
              />
            </Parallax>
          </div>

          <div
            className={
              activeIndex === 4
                ? "fixed inset-0 grid place-content-center bg-black/70 z-10"
                : "z-[1]"
            }
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIndex(0);
            }}
          >
            <Parallax speed={activeIndex === 4 ? 0 : 20}>
              <ParalaxImage
                setIndex={setIndex}
                isActive={activeIndex === 4}
                index={4}
                className='left-[70%]'
                path='/pages/home/images/works-parallax/4.png'
              />
            </Parallax>
          </div>

          <div
            className={
              activeIndex === 5
                ? "fixed inset-0 grid place-content-center bg-black/70 z-10"
                : "z-[1]"
            }
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIndex(0);
            }}
          >
            <Parallax speed={activeIndex === 5 ? 0 : -5}>
              <ParalaxImage
                setIndex={setIndex}
                isActive={activeIndex === 5}
                index={5}
                className='left-[60%]'
                path='/pages/home/images/works-parallax/5.png'
              />
            </Parallax>
          </div>

          <div
            className={
              activeIndex === 6
                ? "fixed inset-0 grid place-content-center bg-black/70 z-10"
                : "z-[1]"
            }
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIndex(0);
            }}
          >
            <Parallax speed={activeIndex === 6 ? 0 : 10}>
              <ParalaxImage
                setIndex={setIndex}
                isActive={activeIndex === 6}
                index={6}
                className='left-[68%] mt-[20%]'
                path='/pages/home/images/works-parallax/2.png'
              />
            </Parallax>
          </div>

          <div
            className={
              activeIndex === 7
                ? "fixed inset-0 grid place-content-center bg-black/70 z-10"
                : "z-[1]"
            }
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIndex(0);
            }}
          >
            <Parallax speed={activeIndex === 7 ? 0 : 10}>
              <ParalaxImage
                setIndex={setIndex}
                isActive={activeIndex === 7}
                index={7}
                className='left-[30%] mt-[20%]'
                path='/pages/home/images/works-parallax/5.png'
              />
            </Parallax>
          </div>

          <div
            className={
              activeIndex === 8
                ? "fixed inset-0 grid place-content-center bg-black/70 z-10"
                : "z-[1]"
            }
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIndex(0);
            }}
          >
            <Parallax speed={activeIndex === 8 ? 0 : 5}>
              <ParalaxImage
                setIndex={setIndex}
                isActive={activeIndex === 8}
                index={8}
                className='left-[5%] mt-[20%]'
                path='/pages/home/images/works-parallax/4.png'
              />
            </Parallax>
          </div>
        </motion.div>
      </ParallaxProvider>

      {/* <div className='w-full flex items-center justify-center'>
        <button className='inline-flex items-center justify-center rounded-full bg-secondaryBackground xl:px-12 lg:px-10 md:px-8 sm:px-6 px-4 sm:py-3 py-2'>
          <span className='text-black font-urbanist leading-none text-nowrap lg:text-base md:text-sm sm:text-xs text-[10px]'>
            See All
          </span>
        </button>
      </div> */}
    </div>
  );
}

function ParalaxImage({
  className,
  path,
  isActive,
  setIndex,
  index,
}: {
  className?: string;
  path: string;
  isActive?: boolean;
  setIndex: (index: number) => void;
  index: number;
}) {
  return (
    <motion.img
      layoutId={`parallax-image-${index}`}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        setIndex(index);
      }}
      src={path}
      className={cn(
        `rounded-[11px] border-[5px] border-black max-h-[80dvh] object-contain object-top ${
          isActive ? "block overflow-auto" : "absolute  overflow-hidden"
        } bg-black`,
        !isActive && className
      )}
      alt=''
    ></motion.img>
  );
}
