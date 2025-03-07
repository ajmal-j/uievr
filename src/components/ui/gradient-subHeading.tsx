import { cn } from "@/lib/utils";

export default function GradientSubHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={cn(
        "font-dmSans grow-0 leading-none w-fit text-nowrap xl:text-base lg:text-[14px] md:text-[12px] sm:text-[10px] text-[8px] font-bold tracking-widest uppercase bg-gradient-to-r from-[#B9FD50] to-[#FFFFFF] inline-block text-start text-transparent bg-clip-text px-[1px]",
        className
      )}
    >
      {children}
    </h4>
  );
}
