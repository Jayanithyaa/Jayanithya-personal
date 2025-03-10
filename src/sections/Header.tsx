"use client";

import React from "react";

export const Header = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetAttr = e.currentTarget.getAttribute("href");
    if (targetAttr) {
      // Ensure the element is treated as an HTMLElement
      const targetElement = document.querySelector(targetAttr) as HTMLElement | null;
      const location = targetElement ? targetElement.offsetTop : 0;

      window.scrollTo({
        top: location - 80,
        left: 0,
      });
    }
  };

  return (
    <section id="contact">
      <div className="flex justify-center items-center fixed top-3 w-full z-10">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          <a href="home" className="nav-item" onClick={handleClick}>
            Home
          </a>
          <a href="About.tsx" className="nav-item" onClick={handleClick}>
            About
          </a>
          <a href="#skills" className="nav-item" onClick={handleClick}>
            Skills
          </a>
          <a href="#projects" className="nav-item" onClick={handleClick}>
            Projects
          </a>
          {/* <a href="#experience" className="nav-item" onClick={handleClick}>
            Experience
          </a> */}
          <a
            href="#contact"
            className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
            onClick={handleClick}
          >
            Contact
          </a>
        </nav>
      </div>
    </section>
  );
};