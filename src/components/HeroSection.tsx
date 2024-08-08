"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto min-h-[40rem] md:min-h-[50rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-20 md:py-0 pb-20">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-1 md:mt-0 text-4xl md:text-7xl mb-8 font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Muhammad Ghalib Pradipa
        </h1>
        <div className="mt-2 w-full h-40 relative -z-10">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={1500}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          <div className="-mt-2 z-10">
            <p className="mt-8 font-medium text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
              Front End Developer | UI / UX Designer
            </p>
            <div className="mt-4">
              <Link href="https://drive.google.com/file/d/1RlEfxDMkGJU6beFf6HUX3ybhP4c2y2ht/view?usp=sharing">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  Checkout Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
