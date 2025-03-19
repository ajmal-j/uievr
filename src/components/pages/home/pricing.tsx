import GradientHeading from "@/components/ui/gradient-heading";
import GradientSubHeading from "@/components/ui/gradient-subHeading";

const pricingData: {
  title: string;
  description: string;
  price: string;
  features: string[];
}[] = [
  {
    title: "Custom Website",
    description:
      "A fully custom website designed and built specifically for you. Multiple revisions during the design phase, lead to a polished and customized website.",
    price: "5,999",
    features: [
      "Custom, unique design",
      "Custom coded development",
      "3-5 pages + blog/articles",
      "No eCommerce functionality",
    ],
  },
  {
    title: "Re-design Website",
    description:
      " completely custom website redesign tailored specifically to your brand. Multiple content revisions to perfect the messaging that tells your story.",
    price: "34,499",
    features: [
      "Custom, unique design",
      "Custom coded development",
      "3-5 pages + blog/articles",
      "eCommerce storefront",
    ],
  },
];

export default function Pricing() {
  const scrollToContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="centered-wrapper-custom-width max-w-[1700px] flex flex-col gap-10 relative">
      <div className="flex w-full flex-col place-self-center max-w-[1240px] xl:pb-10 lg:pb-8 md:pb-6">
        <GradientSubHeading>Our Pricing</GradientSubHeading>
        <GradientHeading>Find Your Perfect Plan</GradientHeading>
        <p className="text-[#797878] text-[24px] font-outfit font-light max-w-[660px]">
          Discover the ideal plan to fuel your business growth. Our pricing
          options are carefully crafted to cater to businesses.
        </p>
      </div>

      <div className="flex items-center justify-center xl:gap-16 lg:gap-14 md:gap-12 sm:gap-10 gap-8 flex-wrap">
        {pricingData.map(({ description, features, price, title }, index) => (
          <div
            key={index}
            className="flex flex-col md:gap-7 sm:gap-5 gap-4 items-start max-w-[500px] bg-white xl:p-[40px] lg:p-[36px] md:p-[32px] sm:p-[27px] p-[25px] md:rounded-3xl sm:rounded-3xl rounded-2xl w-full"
          >
            <div className="aspect-square xl:p-4 lg:p-3 md:p-2 sm:p-1 p-[10px] bg-[#B9FD50] grid place-content-center rounded-xl">
              <img
                src="/pages/home/pricing/elements/card-top-icon.svg"
                className="xl:w-[24px] lg:w-[20px] md:w-[16px] sm:w-[14px] w-[12px]"
                alt=""
              />
            </div>
            <h2 className="font-outfit xl:text-[44px] lg:text-[36px] md:text-[30px] sm:text-[24px] text-[21px] text-[#1B223C] font-medium text-nowrap leading-none">
              {title}
            </h2>
            <p className="text-[#797878] font-outfit xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[14px] text-[12px] font-light">
              {description}
            </p>
            <div className="flex items-end sm:gap-3 gap-2">
              <h3 className="text-[#1B223C] font-outfit xl:text-[60px] lg:text-[48px] md:text-[40px] sm:text-[32px] text-[29px] font-medium tracking-tight text-nowrap leading-none">
                ₹{price}
              </h3>
              <span className="text-[#797878] sm:pb-1 font-outfit xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[14px] text-[12px] font-light">
                per month
              </span>
            </div>
            <div className="flex flex-col items-start justify-start md:gap-5 sm:gap-4 gap-3 md:py-8 sm:py-6 py-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center justify-start md:gap-5 sm:gap-4 gap-3"
                >
                  <img
                    src="/pages/home/pricing/elements/tick-vector.svg"
                    className="object-contain xl:w-[17px] lg:w-[14px] md:w-[12px] sm:w-[10px] w-[8px]"
                    alt=""
                  />
                  <p className="font-outfit text-[#1B223C] xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[14px] text-[12px]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={scrollToContact}
              className="w-full flex-1 text-center md:p-3 p-2 border border-[#1B223C] xl:rounded-xl lg:rounded-lg rounded-md cursor-pointer"
            >
              <p className="font-outfit xl:text-[24px] lg:text-[20px] md:text-[16px] sm:text-[14px] text-[12px] text-[#1B223C]">
                Enquiry Now
              </p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
