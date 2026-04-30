import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import HeroBadge from "@/components/HeroBadge";
import { products } from "@/data/products";

export const Route = createFileRoute("/catalog")({
  component: CatalogPage,
  head: () => ({
    meta: [
      { title: "Catalog — RIVR Fluid Asset Streams" },
      {
        name: "description",
        content:
          "Browse the RIVR product catalog: Smart Vaults, staking modules, NFTs, and liquid cash tools.",
      },
      { property: "og:title", content: "Catalog — RIVR" },
      {
        property: "og:description",
        content:
          "Smart Vaults, staking, NFTs and tools that turn rigid holdings into liquid cash instantly.",
      },
    ],
  }),
});

function CatalogPage() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] p-2 md:p-3">
      {/* Page shell — same rounded canvas as the Hero */}
      <div className="relative w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#e8edf5] via-[#eef1f6] to-[#f0f0f0]">
        {/* Top bar */}
        <header className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-4 md:py-6">
          <Link
            to="/"
            className="text-[20px] font-normal text-[rgba(30,50,90,0.95)] tracking-tight hover:opacity-70 transition-opacity"
          >
            RIVR
          </Link>

          <ul className="hidden md:flex items-center gap-8 bg-white/40 backdrop-blur-md border border-white/30 rounded-full px-6 py-2.5 text-[14px] font-normal text-[rgba(30,50,90,0.9)]">
            <li className="cursor-pointer hover:opacity-70 transition-opacity">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group">
              <Link to="/catalog">Catalog</Link>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </li>
          </ul>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center bg-[rgba(30,50,90,0.8)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(30,50,90,1)] transition-colors"
          >
            <span className="bg-white/15 rounded-full p-1.5 md:p-2 flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </span>
            <span className="text-xs md:text-sm font-normal">Book Demo</span>
          </motion.button>
        </header>

        {/* Heading */}
        <section className="px-4 md:px-8 lg:px-12 pt-6 md:pt-10 pb-8 md:pb-12 text-center max-w-4xl mx-auto">
          <HeroBadge />
          <motion.h1
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-normal text-[#5E6470] mb-3 tracking-tight leading-[1.05]"
          >
            Product Catalog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-[#5E6470] opacity-80 leading-relaxed max-w-xl mx-auto font-normal"
          >
            Every Vault, Stake module, and NFT on RIVR — designed to keep your
            assets fluid.
          </motion.p>
        </section>

        {/* Grid */}
        <section className="px-4 md:px-8 lg:px-12 pb-12 md:pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
