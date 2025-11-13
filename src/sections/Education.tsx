import SchoolLogo from "@/assets/images/SchoolLogo.png";
import UniversityLogo from "@/assets/images/UniversityLogo.png";
import Image from "next/image";

export const Education = () => {
  return (
    <div className="mt-10 px-6 md:px-12 lg:px-0 pb-10">
      
      <h2 className="font-mono text-2xl bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
      My Education -
      </h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {/* University */}
        <div className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6 flex items-center gap-4">
          {/* University Logo */}
          <Image
            src={UniversityLogo}
            alt="University Logo"
            width={80}
            height={80} 
            className="object-contain"
          />

          {/* University Text */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              BSc. (Hons) in IT & Management
            </h3>
            <p className="text-gray-400">
            University of Moratuwa, Sri Lanka
            </p>
            <p className="text-gray-500">2020 - 2025</p>
            <p className="text-gray-300 text-sm mt-2">
      🎯 Pursued Bachelor of Science (Hons) in Information Technology & Management from Faculty of IT, University of Moratuwa.
    </p>
            
          </div>
        </div>

        {/* High School */}
        <div className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6 flex items-center gap-4">
          {/* School Logo */}
          <Image
            src={SchoolLogo}
            alt="School Logo"
            width={60}  
            height={60} 
            className="object-contain"
          />

          {/* School Text */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Advanced Level - Commerce Stream
            </h3>
            <p className="text-gray-400">Kekirawa Central College</p>
            <p className="text-gray-500">2011 - 2019</p>
            <p className="text-gray-300 text-sm mt-2">
      🏆 Achieved District Rank 5 in A/Ls.
    </p>
          </div>
        </div>
      </div>
    </div>
  );
};
