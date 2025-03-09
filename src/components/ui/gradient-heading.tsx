import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function GradientHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.h4
      initial={{ opacity: 0.5, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut", delay: 0.2 }}
      viewport={{ once: true }}
      className={cn(
        "xl:text-[97px] lg:text-[80px] md:text-[60px] sm:text-[40px] text-[33px] grow-0 inline-block font-outfit tracking-tighter bg-gradient-to-b from-white via-white/80 to-white/60 text-transparent bg-clip-text px-[1px] leading-[0.9] py-4",
        className
      )}
    >
      {children}
    </motion.h4>
  );
}
