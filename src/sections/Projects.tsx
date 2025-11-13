import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import MERNJobPortal from "@/assets/images/MERNJobPortal.png";
import eduAnalyticsImg from "@/assets/images/EduAnalytics.png";
import eventMngImg from "@/assets/images/EventMng.png";
import leaflinkImg from "@/assets/images/Leaflink.png"
import CMOImg from "@/assets/images/cmo.png"
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
// Technology Icons
import { FaReact, FaNodeJs, FaNetworkWired, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiHtml5, SiFastapi, SiDotnet, SiDocker, SiCss3, SiNextdotjs, SiJavascript, SiPhp } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";






const portfolioProjects = [
  {
    company: "Commercial Project",
    year: "(Ongoing)",
    title: "Event Management and Ticketing System",
    results: [
      { title: "A comprehensive event management and ticketing platform built with Next.js frontend and .NET Core 9 backend, fully dockerized for production deployment." },
    ],
    link: "https://github.com/Jayanithyaa/Event-Management-and-Ticketing-App",
    liveSite: "https://ezticket.netlify.app",
    image: eventMngImg,
    technologies: [
      { name: "React", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "DotNet", icon: SiDotnet },
      { name: "MicrosoftSWLServer", icon: DiMsqlServer },
      { name: "Docker", icon: SiDocker },
    ],
  },
  {
    company: "Personal Project",
    year: "(2024)",
    title: "Job Portal Application",
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
    company: "Second Year Software Project",
    year: "(2023)",
    title: "EveM Event Management Software",
    results: [
      { title: "Event management application developed for the IFS with features like event planning, gallery, and analytics." },
    ],
    link: "https://github.com/chamikaEkanayaka/EvemWeb.git",
    image: darkSaasLandingPage,
    technologies: [
      { name: "ReactJS", icon: FaReact },
      { name: "ASP.NET", icon: SiDotnet },
      { name: "MS SQL",icon:DiMsqlServer },
    ],
  },
  {
    company: "Final Year Project",
    year: "(2025)",
    title: "Blockchain-Based Tea Bidding System",
    results: [
      { title: "Hybrid solution for managing supply chain workflows across all users, enabling greater transparency, security, and efficiency in the tea trade." },
      
    ],
    link: "https://github.com/Jayanithyaa/LeafLink",
    image: leaflinkImg,
    technologies: [
      { name: "Hyperledger Fabric", icon: FaNetworkWired }, 
      { name: "Nextjs", icon: SiNextdotjs },
      { name: "tailwindcss", icon: SiTailwindcss },
      { name: "Docker", icon: SiDocker },
      { name: "Redis",icon:DiRedis },
      { name: "Node.js", icon: FaNodeJs },
    ],
  },
  {
    company: "Client Project",
    year: "(2025)",
    title: "Multi-Dimensional Course Performance Analytics System",
    results: [
      { title: "A comprehensive analytics dashboard for tracking course performance across multiple dimensions including students, instructors, courses, and campuses." },
    ],
    link: "https://github.com/Jayanithyaa/Multi-Dimensional-Course-Performance-Analytics-Dashboard",
    image: eduAnalyticsImg,
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "firebase", icon: SiFirebase },
      { name: "fastapi", icon: SiFastapi },
      { name: "python", icon: FaPython },
    ],
  },
  {
    company: "Client Project",
    year: "(2024)",
    title: "CMO Project",
    results: [
      { title: "official website for the Association of Creators and Publishers of Sri Lanka, an organization committed to protecting the rights, royalties, and recognition of Sri Lankan music creators." },

    ],
    link: "https://github.com/Jayanithyaa/CMO_project",
    image: CMOImg,
    liveSite: "https://www.acposl.lk",
    technologies: [
      { name: "html", icon: SiHtml5 },
      { name: "css3", icon: SiCss3 },
      { name: "php", icon: SiPhp },
      { name: "javascript", icon: SiJavascript },
   
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 md:mt-20">
          {portfolioProjects.map((project , projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-xs text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-lg md:text-2xl">
                    {project.title}
                  </h3>
                </div>
                
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain border border-white/20 rounded-xl max-h-[300px]"
                  />
                </div>
                
                <div className="flex flex-col gap-6">
                  <ul className="flex flex-col gap-3">
                    {project.results.map((Result, index) => (
                      <li className="flex gap-2 text-sm text-white/50" key={index}>
                        <CheckIcon className="size-4" />
                        <span>{Result.title}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2 flex-wrap">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="flex items-center gap-1 text-white/80 bg-white/5 px-3 py-1 rounded-lg text-sm">
                        {tech.icon && <tech.icon className="size-4" />}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-10 w-full sm:w-auto px-5 rounded-xl font-semibold inline-flex items-center justify-center gap-2 text-sm">
                      <VscGithub className="size-4" />
                      <span>Repository</span>
                      <IoIosArrowForward className="size-4"/>
                    </button>
                  </a>
                  {project.liveSite && (
                    <a href={project.liveSite} target="_blank" rel="noopener noreferrer">
                      <button className="bg-transparent text-white h-10 w-full sm:w-auto px-5 rounded-xl font-semibold inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 transition duration-300 text-sm">
                        <span>Live</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
