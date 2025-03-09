import memojiImage from "@/assets/images/my-image.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StraIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import logoImage from "@/assets/images/logo.png";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        {/* shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string;
  orbitDuration?: string; */}

        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="10s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="12s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="14s">
            <div className="size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
        
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="16s" shouldSpin spinDuration="3s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="18s" shouldSpin spinDuration="6s">
          <StraIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="20s" shouldSpin spinDuration="6s">
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
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="28s" shouldSpin spinDuration="6s">
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
          {/* <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div> */}
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className=" text-3xl md:text-5xl text-center mt-0" tracking-wide>
            <div className="font-extralight text-emerald-300/70 animate-bounce">
              Hello
            </div>
            <div className="font-sans">I'm Jayanithya</div>
            <div className="font-extralight text-sm tracking-[0.3em] mt-4">
              - Final year undergraduate -
            </div>
            <div className="font-mono text-sm mt-2 ">
              <a href="https://uom.lk/">University of Moratuwa</a>
            </div>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
              <span className="font-semibold">Download Resume</span>
              <ArrowDown className="size-4" />
            </button>
          </div>
          {/* <div className="border-t border-white/15  mt-5 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8"></div>
          
          <p className="mt-4 text-center font-sans text-white/70 md:text-lg">
          I am passionate about building innovative and scalable solutions, with a strong focus on problem-solving, creativity, and continuous learning.
          </p> */}
        </div>

        {/* <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white text-gray-900 bg-white h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div> */}
      </div>
    </div>
  );
};
