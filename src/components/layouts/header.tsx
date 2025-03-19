import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import AnimatedLogo from "../ui/animated-logo";

export default function Header({ className }: { className?: string }) {
  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className={cn(
        "bg-transparent absolute top-0 left-0 right-0 flex justify-stretch font-dmSans xl:px-20 lg:px-10 sm:px-8 px-5 xl:py-14 md:py-10 py-6 z-50",
        className
      )}
    >
      <div className="flex-1"></div>
      <div className="flex-1 flex xl:gap-8 lg:gap-5 sm:gap-4 gap-3 items-center justify-center">
        <AnimatedLogo />
        <svg
          className="xl:h-[42px] lg:h-[35px] md:h-[30px] sm:h-[25px] h-[20px] w-auto"
          viewBox="0 0 116 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2723 41.5024C5.63614 41.5024 0.0597485 36.9307 0.0597485 28.3401V4.32643H6.89208V28.742C6.89208 32.3591 9.60492 35.1724 13.222 35.1724C16.7889 35.1724 19.6525 32.3591 19.6525 28.742V4.32643H26.4848V28.3401C26.4848 36.9307 20.8582 41.5024 13.2723 41.5024ZM29.0167 41V11.6109H35.8491V41H29.0167ZM28.1627 4.4269C28.1627 1.86478 29.8205 0.156695 32.4329 0.156695C35.0955 0.156695 36.7031 1.86478 36.7031 4.4269C36.7031 6.98903 35.0955 8.64688 32.4329 8.64688C29.6698 8.64688 28.1627 6.98903 28.1627 4.4269Z"
            fill="#B9FD50"
          />
          <path
            d="M52.8228 41.6029C43.579 41.6029 37.2993 34.871 37.2993 26.3808C37.2993 17.7902 43.9809 11.0081 52.5716 11.0081C61.3129 11.0081 67.6931 17.4385 67.6931 26.1296V28.6917H43.78C44.7345 32.8615 47.9999 35.6246 52.8228 35.6246C56.6408 35.6246 59.5546 33.615 60.9613 30.4501L66.5377 33.6653C63.9755 38.4379 59.4541 41.6029 52.8228 41.6029ZM52.5716 16.9863C48.5023 16.9863 45.3373 19.3978 44.1316 23.0149H60.8106C59.8058 19.0461 56.7915 16.9863 52.5716 16.9863ZM76.909 41L65.706 11.6109H72.7895L80.3754 32.3089L87.8106 11.6109H94.7937L83.7413 41H76.909ZM95.78 41V11.6109H102.512V15.9816C103.868 13.0678 106.38 11.6109 110.047 11.6109C112.208 11.6109 113.866 12.1133 115.222 12.8669L112.66 19.2973C111.655 18.6442 110.55 18.1418 108.591 18.1418C104.622 18.1418 102.562 20.2518 102.562 25.3258V41H95.78Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="flex-1 flex items-center">
        <div className="w-full flex items-center justify-end xl:gap-10 lg:gap-7 h-[50px]">
          <button
            onClick={scrollToContact}
            className="relative text-start ps-4 text-white lg:border lg:border-[#B9FD50] xl:w-[143px] lg:w-[133px] flex items-center rounded-[30px] h-full"
          >
            <span className="xl:text-[17px] lg:text-[15px] lg:inline-block hidden">
              Contact
            </span>
            <div className="aspect-square bg-[#B9FD50] grid place-content-center rounded-full lg:size-[50px] size-[40px] absolute right-0">
              <Phone className="xl:h-6 lg:h-5 h-4 text-black" />
            </div>
          </button>
          {/* <div className='h-[45px] bg-[#9000FF] w-[1.3px] shrink-0 place-items-start lg:block hidden' />
          <button className='xl:text-[17px] lg:text-[15px] text-black bg-[#B9FD50] rounded-[30px] h-full shrink-0 py-2 xl:px-7 lg:px-5 lg:block hidden'>
            Contact Us
          </button> */}
        </div>
      </div>
    </div>
  );
}
