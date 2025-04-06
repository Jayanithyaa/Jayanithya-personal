"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import myPhoto from "@/assets/images/my-photo.png";
import CheckIcon from "@/assets/icons/check-circle.svg";
import { Education } from "@/sections/Education";
import { ExperienceRoadmap } from "./ExperienceRoadmap";
import { CertificationSection } from "./CertificationSection";
import VolunteeringSection from "./volunteeringAndLeadership";

export const Introduction = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Define allowed section names
  type SectionName = "Experiences" | "Education" | "Certificate" | "Volunteering & Leadership";

  // Create refs with a defined type
  const sectionRefs: Record<SectionName, React.RefObject<HTMLDivElement>> = {
    Experiences: useRef<HTMLDivElement>(null),
    Education: useRef<HTMLDivElement>(null),
    Certificate: useRef<HTMLDivElement>(null),
    "Volunteering & Leadership": useRef<HTMLDivElement>(null),
  };

  const handleSectionClick = (section: SectionName) => {
    if (activeSection === section) {
      setActiveSection(null); // Close if already open
    } else {
      setActiveSection(section);
      setTimeout(() => {
        sectionRefs[section]?.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 200);
    }
  };

  return (
    <div className="mt-20 flex flex-col items-center">
      {/* <div className="grid md:grid grid-col-1 gap-8"></div> */}
      {/* Top Section (Text + Image) */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 w-full max-w-5xl">
        {/* Left Section - Text Content */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="font-mono text-2xl bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            Hey there! It&apos;s me,
          </h2>

          <h1 className="text-4xl mt-4 md:text-5xl text-white">
            Jayanithya Madhushani.
          </h1>
          <div className="border-t border-white/15 mt-8 py-2"></div>
          <p className="mt-4 text-white/80 leading-relaxed">
            I am a final-year IT undergraduate from Sri Lanka, passionate about
            building innovative and scalable solutions. With a strong focus on
            problem-solving, creativity, and continuous learning, I strive to
            push the boundaries of technology.
          </p>
          <ul className="space-y-2 text-white/50 mt-8">
            <li className="flex items-center gap-2">
              <CheckIcon className="size-5 md:size-6 text-gray-400" /> Frontend Development
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="size-5 md:size-6 text-gray-400" /> Backend Development
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="size-5 md:size-6 text-gray-400" /> UI/UX Design
            </li>
          </ul>
        </div>

        {/* Right Section - Image */}
        <div className="w-60 md:w-72 border border-white/15 rounded-xl overflow-hidden shadow-md">
          <Image
            src={myPhoto}
            className="w-full h-full object-cover object-center"
            alt="Image of Jayanithya"
          />
        </div>
      </div>

      {/* Clickable Sections */}
      <div className="w-full flex justify-start gap-8 mt-6">
        {(Object.keys(sectionRefs) as SectionName[]).map((title) => (
          <button
            key={title}
            onClick={() => handleSectionClick(title)}
            className={`relative text-lg font-sans transition duration-300 flex flex-col items-center group ${
              activeSection === title ? "text-emerald-400" : "text-sky-200 hover:text-emerald-400"
            }`}
          >
            <span className="relative">{title}</span>
            <div
              className={`absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-emerald-300 to-sky-400 transition-all duration-500 ease-in-out ${
                activeSection === title
                  ? "w-full opacity-100"
                  : "group-hover:w-full group-hover:opacity-100"
              }`}
            ></div>
          </button>
        ))}
      </div>

      {/* Collapsible Sections */}
      <div className="w-full max-w-5xl mt-10">
        {(Object.entries(sectionRefs) as [SectionName, React.RefObject<HTMLDivElement>][])
          .map(([title, ref]) => (
            <AnimatePresence key={title} mode="wait">
              {activeSection === title && (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: -350 }}
                  animate={{ opacity: 3, y: 0 }}                 
                  transition={{ duration: 0.7 }}
                  className="mt-6 p-6 bg-white/5 text-gray-300 rounded-lg"
                >
                  {title === "Experiences" && <ExperienceRoadmap />}
                  {title === "Education" && <Education />}
                  {title === "Certificate" && <CertificationSection />}
                  {title === "Volunteering & Leadership" && <VolunteeringSection />}
                </motion.div>
              )}
            </AnimatePresence>
          ))}
      </div>
    </div>
  );
};
