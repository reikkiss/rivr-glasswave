import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronRight } from "lucide-react";

type NavItem = { label: string; hasDropdown?: boolean; to?: string };

const items: NavItem[] = [
  { label: "nlj" },
  { label: "Catalog", to: "/catalog" },
  { label: "Economics", hasDropdown: true },
  { label: "Developers" },
  { label: "Governance", hasDropdown: true },
];

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 md:px-8 lg:px-12 py-4 md:py-6">
      {/* Left spacer (desktop) */}
      <div className="hidden md:block flex-1">
        <img src="https://media.canva.com/v2/image-resize/format:PNG/height:121/quality:100/uri:ifs%3A%2F%2FM%2F757f22b8-9481-4e05-bd67-2aba949c534c/watermark:F/width:488?csig=AAAAAAAAAAAAAAAAAAAAABFrL4eJu00esIk3TtTN1msnFeRNOA5zZnUVaEgFJ1cO&exp=1777612026&osig=AAAAAAAAAAAAAAAAAAAAAOdXe-Xf3pKAulHL2yJnhAd0gMniZfr8DTfiap9x8nFN&signer=media-rpc&x-canva-quality=thumbnail_large" alt="Solmare" className="h-16 w-auto object-cover" />
      </div>

      {/* Center menu */}
      <ul className="hidden md:flex items-center gap-8 bg-white/40 backdrop-blur-md border border-white/30 rounded-full px-6 py-2.5 text-[14px] font-normal text-[rgba(30,50,90,0.9)]">
        {items.map((item) => (
          <li
            key={item.label}
            className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group"
          >
            {item.to ? <Link to={item.to}>{item.label}</Link> : item.label}
            {item.hasDropdown && (
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            )}
          </li>
        ))}
      </ul>

      {/* Mobile logo */}
      <img src="https://media.canva.com/v2/image-resize/format:PNG/height:121/quality:100/uri:ifs%3A%2F%2FM%2F757f22b8-9481-4e05-bd67-2aba949c534c/watermark:F/width:488?csig=AAAAAAAAAAAAAAAAAAAAABFrL4eJu00esIk3TtTN1msnFeRNOA5zZnUVaEgFJ1cO&exp=1777612026&osig=AAAAAAAAAAAAAAAAAAAAAOdXe-Xf3pKAulHL2yJnhAd0gMniZfr8DTfiap9x8nFN&signer=media-rpc&x-canva-quality=thumbnail_large" alt="Solmare" className="md:hidden h-12 w-auto object-cover" />

      {/* Right button */}
      <div className="flex-1 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center bg-[rgba(30,50,90,0.8)] text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[rgba(30,50,90,1)] transition-colors group"
        >
          <span className="bg-white/15 rounded-full p-1.5 md:p-2 flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </span>
          <span className="text-xs md:text-sm font-normal">Book Demo</span>
        </motion.button>
      </div>
    </nav>
  );
}
