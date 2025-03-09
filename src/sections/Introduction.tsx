"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import myPhoto from "@/assets/images/my-photo.png";
import CheckIcon from "@/assets/icons/check-circle.svg";
import { Education } from "@/sections/Education";
import { ExperienceRoadmap } from "./ExperienceRoadmap";
import { CertificationSection } from "./CertificationSection";
import VolunteeringSection from "./volunteeringAndLeadership";

export const Introduction = () => {
  const [visibleSection, setVisibleSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className="mt-20 flex flex-col items-center">
      {/* Top Section (Text + Image) */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 w-full max-w-5xl">
        {/* Left Section - Text Content */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="font-mono text-2xl  bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
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
              <CheckIcon className="size-5 md:size-6 text-gray-400" /> Frontend
              Development
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="size-5 md:size-6 text-gray-400" /> Backend
              Development
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="size-5 md:size-6 text-gray-400" /> UI/UX
              Design
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
        {[
          { title: "Experiences", component: <ExperienceRoadmap /> },
          { title: "Education", component: <Education /> },
          { title: "Certificate", component: <CertificationSection /> },
          {
            title: "Volunteering & Leadership",
            component: <VolunteeringSection />,
          },
        ].map(({ title }) => (
          <button
            key={title}
            onClick={() => toggleSection(title)}
            className="relative text-sky-200 text-lg font-sans hover:-rotate-3 transition duration-300 hover:text-emerald-400 flex flex-col items-center group"
          >
            <span className="relative">{title}</span>
            {/* Smooth appearing underline */}
            <div
              className={`absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-emerald-300 to-sky-400 transition-all duration-500 ease-in-out ${
                visibleSection === title
                  ? "w-full opacity-100"
                  : "group-hover:w-full group-hover:opacity-100"
              }`}
            ></div>
          </button>
        ))}
      </div>

      {/* Collapsible Content with Framer Motion for smooth animation */}
      <AnimatePresence mode="wait">
        {visibleSection && (
          <motion.div
            key={visibleSection}
            initial={{ opacity: 0, y: -10 }} // Start hidden & slightly higher
            animate={{ opacity: 1, y: 0 }} // Smoothly appear
            exit={{ opacity: 0, y: -10 }} // Disappear smoothly
            transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth transition
            className="mt-6 w-full max-w-5xl p-6 bg-white/5 text-gray-300 rounded-lg"
          >
            {
              [
                { title: "Experiences", component: <ExperienceRoadmap /> },
                { title: "Education", component: <Education /> },
                { title: "Certificate", component: <CertificationSection /> },
                {
                  title: "Volunteering & Leadership",
                  component: <VolunteeringSection />,
                },
              ].find((item) => item.title === visibleSection)?.component
            }
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
