import { FaUniversity, FaLaptopCode, FaUserGraduate } from "react-icons/fa";
import { MdOutlineWorkHistory } from "react-icons/md";
import Image from "next/image";
import UniversityLogo from "@/assets/images/UniversityLogo.png"; // Your university logo
import SchoolLogo from "@/assets/images/SchoolLogo.png"; // Your school logo
import { TechIcon } from "@/components/TechIcon"; // Import your new TechIcon component

export const ExperienceRoadmap = () => {
  return (
    <div className="mt-10 px-6 md:px-12 lg:px-10 pb-10">
      <h2 className="font-mono text-2xl bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
        My Professional Journey -
      </h2>

      <div className="relative flex flex-col items-start space-y-10 pl-6 mt-10">
        {/* Associate Software Engineer */}
        <div className="relative flex items-start gap-6">
          <div className="absolute -left-7 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg">
            <TechIcon component={FaLaptopCode} />
          </div>
          <div className="pl-10">
            <h3 className="text-xl font-semibold text-white">
              Associate Software Engineer - X ONT Software
            </h3>
            <p className="text-gray-400">October 2023 - Present</p>
            <p className="text-white/60 text-sm mt-2">
              Focused on backend development, implementing features in .NET, Angular, and working on complex software architecture.
            </p>
            <p className="text-gray-500 text-sm mt-2">Technologies Used: .NET, Angular, MS SQL, C#</p>
          </div>
        </div>

        {/* Internship */}
        <div className="relative flex items-start gap-6">
          <div className="absolute -left-7 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg">
            <TechIcon component={MdOutlineWorkHistory} />
          </div>
          <div className="pl-10">
            <h3 className="text-xl font-semibold text-white">
            Software Engineer Internship - X ONT Software
            </h3>
            <p className="text-gray-400">June 2023 - September 2023</p>
            <p className="text-white/60 text-sm mt-2">
              Worked on enhancing internal tools, bug fixes, and software development using .NET, Angular, and MS SQL.
            </p>
            <p className="text-gray-500 text-sm mt-2">Technologies Used: .NET, Angular, MS SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};
