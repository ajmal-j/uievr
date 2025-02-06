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
    <div className="centered-wrapper flex flex-col gap-10" id="works">
      <div className="flex w-full flex-col place-self-center max-w-[1240px] pb-10">
        <GradientSubHeading>Our Works</GradientSubHeading>
        <GradientHeading>How, we can produce work </GradientHeading>
      </div>

      <div className="grid grid-cols-3 gap-12">
        {works.map((work, index) => (
          <div key={index} className="flex flex-col gap-5 w-full">
            <div className="flex-1">
              <img
                src={work.image}
                className="rounded-[20px] w-full object-contain"
                alt={`${work.title} image`}
              />
            </div>
            <div className="flex-1 flex items-start justify-between gap-4">
              <div className="font-dmSans">
                <h3 className="text-[#CACACE] text-xl font-medium">
                  {work.title}
                </h3>
                <p className="text-[#797C86] text-lg">{work.date}</p>
              </div>
              <div className="flex items-center gap-3 uppercase border-b-[1px] border-b-[#2F2F37] pb-[2px]">
                <span className="text-[#F2F2F3] font-medium text-lg font-outfit">
                  View Project
                </span>
                <img
                  src="/pages/home/icons/arrow-top-right.svg"
                  className="w-[16.5px] object-contain"
                  alt="Arrow top right icon"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex items-center justify-center">
        <button className="inline-flex items-center justify-center rounded-full bg-secondaryBackground px-12 py-3">
          <span className="text-black font-urbanist leading-none text-nowrap">
            See All
          </span>
        </button>
      </div>
    </div>
  );
}
