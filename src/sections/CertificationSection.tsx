import { CertificationCard } from "@/components/CertificationCard"; // Import the CertificationCard component
import { CustomHeader } from "@/components/CustomHeader"; // Updated header component name
import aspnetCore from "@/assets/images/certifications/aspnet-core-logo.png";
import WebDesign from "@/assets/images/certifications/web-design-logo.png";
import Python from "@/assets/images/certifications/python-logo.png";

const certifications = [
  {
    title: "ASP.NET Core Foundation",
    issuedBy: "Coursera",
    date: "June 2024",
    link: "https://coursera.org/share/ac265afab95266f6ac8f4c4e5f5e5d49",
    image: aspnetCore, 
  },
  {
    title: "Web Design for Beginners",
    issuedBy: "CODL University of Moratuwa",
    date: "July 2024",
    link: "https://drive.google.com/file/d/1fiR_N--Sc55zVYQBtkw1-bGod2WuHCEi/view",
    image: WebDesign, 
  },
  {
    title: "Python for Beginners",
    issuedBy: "CODL University of Moratuwa",
    date: "July 2023",
    link: "https://drive.google.com/file/d/13F0mOq0tOe56DXoe-gEc2zOcsy3omsci/view",
    image: Python, // Replace with your actual image path
  },
  
];

export const CertificationSection = () => {
  return (
    <div className="py-20 lg:py-10">
      <div className="container">
        <CustomHeader
          title="Certifications That Empower Me -"
          description="These certifications showcase my commitment to continuous learning and professional development."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <CertificationCard
              key={cert.link} 
              title={cert.title}
              issuedBy={cert.issuedBy}
              date={cert.date}
              link={cert.link}
              image={cert.image} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};
