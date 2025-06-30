import HeroSection from "@/sections/hero";
import { DarkThemeToggle } from "flowbite-react";

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute top-4 right-4">
        <DarkThemeToggle />
      </div>

      <HeroSection />
    </main>
  );
}
