"use client";

import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StraIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import memojiImage from "@/assets/images/my-image.png";

export const HeroSection = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/JayanithyaMadhushani_SE.pdf";
    link.setAttribute("download", "JayanithyaMadhushani_SE.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="py-32 md:py-48 lg:py-80 relative z-0 overflow-x-clip"
    >
      {/* Added pointer-events-none here to allow clicks through this overlay */}
      <div
        className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none"
      >
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>

        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="10s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="12s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="14s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="16s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="18s"
          shouldSpin
          spinDuration="6s"
        >
          <StraIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="20s"
          shouldSpin
          spinDuration="6s"
        >
          <StraIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="22s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="24s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="26s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="28s"
          shouldSpin
          spinDuration="6s"
        >
          <StraIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[150px]"
            alt="Person peeking from behind laptop"
          />
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl md:text-5xl text-center mt-0 tracking-wide">
            <div className="font-extralight text-emerald-300/70 animate-bounce">
              Hello
            </div>
            <div className="font-sans">I&apos;m Jayanithya</div>
            <div className="font-extralight text-sm tracking-[0.3em] mt-4">
              - Final year undergraduate -
            </div>
            <div className="font-mono text-sm mt-2">
              <a href="https://uom.lk/">University of Moratuwa</a>
            </div>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4">
            <button
              onClick={downloadResume}
              className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:bg-emerald-300 hover:text-gray-900 transition hover:scale-105 active:scale-95 duration-200 cursor-pointer focus:outline-none"
            >
              <span className="font-semibold">Download Resume</span>
              <ArrowDown className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
