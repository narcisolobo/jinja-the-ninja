"use client";

import { useState } from "react";
import HamburgerButton from "@/components/HamburgerButton";
import CareGuideSection from "@/sections/care-guide";
import DailyScheduleSection from "@/sections/daily-schedule";
import EmergencySection from "@/sections/emergency";
import HeroSection from "@/sections/hero";
import { DarkThemeToggle } from "flowbite-react";
import MenuDrawer from "@/components/MenuDrawer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <main className="relative">
      <div className="fixed top-4 left-4 z-40">
        <HamburgerButton onClick={handleClick} />
      </div>
      <div className="fixed top-4 right-4 z-40">
        <DarkThemeToggle />
      </div>
      <MenuDrawer isOpen={isOpen} onClose={handleClose} />

      <HeroSection />
      <EmergencySection />
      <DailyScheduleSection />
      <CareGuideSection />
    </main>
  );
}
