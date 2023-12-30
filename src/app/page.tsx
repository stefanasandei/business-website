/* eslint-disable @next/next/no-img-element */
"use client";

import { MainNav } from "@/components/main-nav";
import { HeroSection } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { baseConfig } from "@/config/base";
import bg from '../../public/images/apa.webp';

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full bg-background/50 backdrop-blur-md">
        <div className="container flex h-16 items-center space-x-4 justify-between sm:space-x-0">
          <MainNav items={baseConfig.mainNav} />
          <nav className="flex space-x-4">
            <Button>Programeaza-te!</Button>
          </nav>
        </div>
      </header>
      <div
        className="absolute inset-x-0 -z-10 overflow-hidden"
        style={{
          background: `url(${bg.src}) no-repeat 50% fixed`,
          backgroundSize: "cover",
          width: "100%",
          height: "100%"
        }}
        aria-hidden="true"
      />
      <div className="container flex-1">
        <HeroSection />
      </div>
    </div>
  );
}

