"use client";

import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServiceSection } from "@/components/sections/services";

import bg from '@/../public/images/apa.webp';

export default function Home() {

  return (
    <main>
      <div
        className="absolute inset-x-0 inset-y-0 -z-10 overflow-hidden"
        style={{
          background: `url(${bg.src}) no-repeat 50% fixed`,
          backgroundSize: "cover",
          width: "100%",
          height: "100%"
        }}
        aria-hidden="true"
      />
      <div className="container flex-1 min-h-[100vh]">
        <HeroSection />
      </div>
      <div className="container flex-1">
        <AboutSection />
      </div>
      <div className="container flex-1">
        <ServiceSection />
      </div>
    </main>
  );
}

