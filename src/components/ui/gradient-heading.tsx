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
        "text-[97px] grow-0 inline-block font-outfit tracking-tighter bg bg-gradient-to-b from-white via-white/80 to-white/60 text-transparent bg-clip-text px-[1px] leading-[0.9] py-4",
        className
      )}
    >
      {children}
    </h4>
  );
}
