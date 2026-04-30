import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/jack/HeroSection";
import MarqueeSection from "@/components/jack/MarqueeSection";
import AboutSection from "@/components/jack/AboutSection";
import ServicesSection from "@/components/jack/ServicesSection";
import ProjectsSection from "@/components/jack/ProjectsSection";

export const Route = createFileRoute("/jack")({
  component: JackPage,
  head: () => ({
    meta: [
      { title: "Jack — 3D Creator" },
      {
        name: "description",
        content:
          "Jack — a 3D creator driven by crafting striking and unforgettable projects. Branding, web design, and motion.",
      },
      { property: "og:title", content: "Jack — 3D Creator" },
      {
        property: "og:description",
        content:
          "A 3D creator portfolio: 3D modeling, rendering, motion design, branding, and web design.",
      },
    ],
  }),
});

function JackPage() {
  return (
    <div className="jack-page min-h-screen">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}
