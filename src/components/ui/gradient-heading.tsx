import { cn } from "@/lib/utils";

export default function GradientHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={cn(
        "xl:text-[97px] lg:text-[80px] md:text-[60px] sm:text-[40px] text-[30px] grow-0 inline-block font-outfit tracking-tighter bg-gradient-to-b from-white via-white/80 to-white/60 text-transparent bg-clip-text px-[1px] leading-[0.9] py-4",
        className
      )}
    >
      {children}
    </h4>
  );
}
