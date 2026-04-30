import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/Hero";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "RIVR — Fluid Asset Streams" },
      {
        name: "description",
        content:
          "RIVR DeFi dashboard: Smart Vaults, RIVR staking, and NFTs that turn rigid holdings into liquid cash instantly.",
      },
    ],
  }),
});

function Index() {
  return <Hero />;
}
