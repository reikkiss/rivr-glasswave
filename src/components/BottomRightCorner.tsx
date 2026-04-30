import { motion } from "motion/react";
import { ArrowUpRight, ChevronRight } from "lucide-react";

export default function BottomRightCorner() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="absolute bottom-0 right-0 p-3 pt-5 pl-8 sm:p-4 sm:pt-6 sm:pl-10 md:p-6 md:pt-8 md:pl-14 bg-[#f0f0f0] rounded-tl-[1.5rem] sm:rounded-tl-[2rem] md:rounded-tl-[3.5rem] flex items-center gap-3 sm:gap-4 md:gap-6"
    >
      {/* Top intersection mask (faux cutout above the cut corner) */}
      <div
        className="absolute -top-4 sm:-top-5 md:-top-6 right-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[#f0f0f0]"
        style={{
          maskImage:
            "radial-gradient(circle at 0% 100%, transparent 100%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at 0% 100%, transparent 100%, black 100%)",
        }}
      >
        <div
          className="absolute inset-0 bg-[#f0f0f0]"
          style={{
            borderBottomRightRadius: "1rem",
            boxShadow: "0 1rem 0 0 #f0f0f0",
          }}
        />
      </div>

      {/* Left intersection mask */}
      <div
        className="absolute bottom-0 -left-4 sm:-left-5 md:-left-6 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-[#f0f0f0]"
        style={{
          borderBottomRightRadius: "1rem",
          boxShadow: "1rem 0 0 0 #f0f0f0",
        }}
      />

      {/* Circle Icon */}
      <div className="bg-[rgba(30,50,90,0.05)] w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-[rgba(30,50,90,0.1)]">
        <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6 text-[rgba(30,50,90,0.8)]" />
      </div>

      {/* Info column */}
      <div className="flex flex-col gap-0.5">
        <span className="text-[16px] md:text-[20px] font-normal text-[rgba(30,50,90,0.95)]">
          Documentation
        </span>
        <div className="flex items-center gap-1 text-[rgba(30,50,90,0.6)]">
          <span className="text-[12px] md:text-[14px] font-normal">Library</span>
          <span className="group inline-flex">
            <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
