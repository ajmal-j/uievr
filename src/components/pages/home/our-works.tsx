import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GradientHeading from "@/components/ui/gradient-heading";
import GradientSubHeading from "@/components/ui/gradient-subHeading";

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
  return (
    <div className='centered-wrapper flex flex-col sm:gap-10 gap-6' id='works'>
      <div className='flex w-full flex-col place-self-center max-w-[1240px] xl:pb-10 lg:pb-8 md:pb-6'>
        <GradientSubHeading>Our Works</GradientSubHeading>
        <GradientHeading>How, we can produce work </GradientHeading>
      </div>

      <div className='lg:grid hidden grid-cols-3 xl:gap-12 lg:gap-8 md:gap-6 sm:gap-4 gap-2'>
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
      </div>
      <div className='w-full flex items-center justify-center'>
        <button className='inline-flex items-center justify-center rounded-full bg-secondaryBackground xl:px-12 lg:px-10 md:px-8 sm:px-6 px-4 sm:py-3 py-2'>
          <span className='text-black font-urbanist leading-none text-nowrap lg:text-base md:text-sm sm:text-xs text-[10px]'>
            See All
          </span>
        </button>
      </div>
    </div>
  );
}
