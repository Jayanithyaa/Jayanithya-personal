import React from "react";
import Image, { StaticImageData } from "next/image";

interface CertificationCardProps {
  title: string;
  issuedBy: string;
  date: string;
  link: string;
  image: string | StaticImageData;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuedBy,
  date,
  link,
  image,
}) => {
  return (
    <div
      className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden 
after:z-10 after:content-[''] after:absolute after:inset-0 
  after:outline-2 after:outline after:-outline-offset-2 
  after:rounded-3xl after:outline-white/20 after:pointer-events-none 
  p-4 shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="w-full h-32 mb-4 relative">
        {/* Use next/image if image is StaticImageData, else use img */}
        {typeof image === "string" ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        )}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-600 text-sm">{issuedBy}</p>
      <p className="text-gray-500 text-sm">{date}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-300 text-sm mt-2 inline-block"
      >
        View Certificate
      </a>
    </div>
  );
};
