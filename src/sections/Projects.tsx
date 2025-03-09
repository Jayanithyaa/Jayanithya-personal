import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import MERNJobPortal from "@/assets/images/MERNJobPortal.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import { Result } from "postcss";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Github } from "lucide-react";
// Technology Icons
import { FaReact, FaNodeJs, FaNetworkWired } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiPostgresql, SiGoland, SiDocker} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { DiDotnet } from "react-icons/di";
import { DiMsqlServer } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";






const portfolioProjects = [
  {
    company: "Personal Project - ",
    year: "Ongoing",
    title: "Event Management and Ticketing System",
    results: [
      { title: "Event management, search, and ticket purchasing features." },
    ],
    link: "https://github.com/DULAJBHAGYA/Event-Management-and-Ticketing-System---Eventify.git",
    image: aiStartupLandingPage,
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Firebase", icon: SiFirebase },
      { name: "GoLang", icon: SiGoland }, 
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Docker", icon: SiDocker },
    ],
  },
  {
    company: "Personal Project - ",
    year: "2024",
    title: "MERN Job Portal",
    results: [
      { title: "Job search platform with employer posting capabilities." },
      { title: "Firebase authentication for secure user management." },
    ],
    link: "https://github.com/Jayanithyaa/MERN-JobPortal",
    image: MERNJobPortal,
    technologies: [
      { name: "React", icon: FaReact },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon:SiExpress},
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    company: "University of Moratuwa - ",
    year: "2024",
    title: "EveM Event Management Software",
    results: [
      { title: "Designed UI with Figma" },
      { title: "Developed frontend and backend components" },
      { title: "API Integration" },
    ],
    link: "https://github.com/chamikaEkanayaka/EvemWeb.git",
    image: darkSaasLandingPage,
    technologies: [
      { name: "ReactJS", icon: FaReact },
      { name: "ASP.NET", icon: DiDotnet },
      { name: "MS SQL",icon:DiMsqlServer },
    ],
  },
  {
    company: "University of Moratuwa - ",
    year: "Ongoing",
    title: "Blockchain-Based Tea Bidding System",
    results: [
      { title: "Smart contracts (Chaincode) in GoLang" },
      { title: "Optimized consensus mechanisms (Raft/SBFT)" },
      { title: "Redis caching for enhanced scalability and performance" },
    ],
    link: "#",
    image: darkSaasLandingPage,
    technologies: [
      { name: "Hyperledger Fabric", icon: FaNetworkWired }, 
      { name: "GoLang", icon: SiGoland },
      { name: "Docker", icon: SiDocker },
      { name: "Redis",icon:DiRedis },
      { name: "Node.js", icon: FaNodeJs },
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col gap-20 mt-10 md:mt20">
          {portfolioProjects.map((project , projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top:`calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5"></hr>
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((Result, index) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50" key={index}>
                        <CheckIcon className="size-5 md:siz-6" />
                        <span>{Result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2 mt-4 pl-5">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="flex items-center gap-1 text-white/80">
                        {tech.icon && <tech.icon className="size-4" />}
                        {/* <span>{tech.name}</span> */}
                      </div>
                    ))}
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <VscGithub className="size-5" />
                      <span>Repository</span>
                      <IoIosArrowForward/>
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
