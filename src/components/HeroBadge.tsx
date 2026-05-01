import { motion } from "motion/react";
import { Zap } from "lucide-react";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 mx-auto mb-3 w-fit"
    >
      <Zap className="w-3.5 h-3.5 text-[#fef0d5]" />
      <span className="text-[12px] font-normal text-[#fef0d5] tracking-wide">
        Fluid Staking
      </span>
    </motion.div>
  );
}
