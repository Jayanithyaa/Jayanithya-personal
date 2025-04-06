"use client";

import React, { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100; // adjust for header offset

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (section: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveSection(section);

    const targetElement = document.querySelector(`#${section}`);
    if (targetElement) {
      const yOffset = -80;
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const getNavItemClass = (section: string) => {
    return `nav-item ${
      activeSection === section
        ? "bg-white text-gray-900"
        : "hover:bg-white/5 hover:text-gray-900"
    }`;
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#home" className={getNavItemClass("home")} onClick={handleClick("home")}>
          Home
        </a>
        <a href="#about" className={getNavItemClass("about")} onClick={handleClick("about")}>
          About
        </a>
        <a href="#skills" className={getNavItemClass("skills")} onClick={handleClick("skills")}>
          Skills
        </a>
        <a href="#projects" className={getNavItemClass("projects")} onClick={handleClick("projects")}>
          Projects
        </a>
        <a href="#contact" className={getNavItemClass("contact")} onClick={handleClick("contact")}>
          Contact
        </a>
      </nav>
    </div>
  );
};
