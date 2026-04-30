import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  cta?: string;
};

type Props = {
  product: Product;
  index?: number;
};

export default function ProductCard({ product, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.05 * index, ease: "easeOut" }}
      className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgba(30,50,90,0.06)] hover:shadow-[0_12px_40px_rgba(30,50,90,0.12)] transition-shadow group"
    >
      {/* Image area */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Category chip — glass like HeroBadge */}
        <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/30">
          <span className="text-[11px] font-normal text-[rgba(30,50,90,0.9)] tracking-wide uppercase">
            {product.category}
          </span>
        </div>
      </div>

      {/* Inner glass panel — mimics BottomLeftCard */}
      <div className="p-3 md:p-4 lg:p-5 flex flex-col gap-3 bg-white/30 backdrop-blur-xl">
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-normal text-[rgba(30,50,90,0.9)] tracking-tight leading-tight">
            {product.name}
          </span>
          <span className="text-[10px] md:text-[12px] font-normal text-[rgba(30,50,90,0.6)] uppercase tracking-wider">
            {product.price}
          </span>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center bg-white rounded-full pl-1.5 pr-5 py-1.5 gap-2 hover:bg-white/90 transition-colors self-start group/btn"
        >
          <span className="bg-[rgba(30,50,90,0.05)] rounded-full p-1.5 flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 text-[rgba(30,50,90,0.9)]" />
          </span>
          <span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)]">
            {product.cta ?? "View Product"}
          </span>
        </motion.button>
      </div>
    </motion.article>
  );
}
