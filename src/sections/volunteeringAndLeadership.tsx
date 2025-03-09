import React from 'react';

// Data for Volunteering and Leadership contributions
const volunteeringAndLeadership = [
  
  {
    title: "Rotaract Club of University of Moratuwa",
    role: "Video Editor (Club Service)",
    duration: "Jan 2020 - Aug 2023 (3 yrs 8 mos)",
    description: "Video editing for key projects such as El Talento, Rota Spark - Orientation, TourEye, and other major Rotaract events. Supported the production of promotional materials and event documentation for various services.",
    skills: "Video Editing, Graphic Design, Digital Media Production",
    certificateLink: ""
  },
  {
    title: "INTECS - University of Moratuwa",
    role: "Designer",
    duration: "Jan 2022 - Aug 2023 (1 yr 8 mos)",
    description: "Worked on multiple design projects including marketing materials and event posters for INTECS. Contributed to creating digital media campaigns for university events.",
    skills: "Graphic Design, Branding, Digital Illustration",
    certificateLink: ""
  },
  {
    title: "FIT Moments",
    role: "Graphic Designer",
    duration: "Jan 2022 - Aug 2023 (1 yr 8 mos)",
    description: "Developed visual content for social media platforms, event promotions, and publications. Designed assets that were used in university-wide initiatives.",
    skills: "Graphic Design, Social Media Strategy",
    certificateLink: ""
  },
  {
    title: "Faculty of Information Technology - University of Moratuwa",
    role: "Batch Representative",
    duration: "Jun 2022 - Jul 2023 (1 yr 2 mos)",
    description: "Represented the Faculty of IT students during faculty meetings, fostering communication between faculty and students. Organized social events and networking sessions for students to enhance engagement and collaboration.",
    skills: "Communication, Leadership, Event Planning",
    certificateLink: ""
  },
  {
    title: "Classical Music Society of University of Moratuwa",
    role: "Member",
    duration: "Oct 2022 - Jan 2023 (4 mos)",
    description: "Participated in music events and performances, enhancing cultural development within the university.",
    skills: "Performing, Teamwork, Cultural Engagement",
    certificateLink: ""
  },
  {
    title: "Drama Society of University of Moratuwa",
    role: "Member",
    duration: "Sep 2022 - Jan 2023 (5 mos)",
    description: "Acted in university drama performances and supported the organization of events.",
    skills: "Acting, Performance, Event Coordination",
    certificateLink: ""
  },
  {
    title: "Kekirawa Central College",
    role: "Senior Prefect",
    duration: "Jan 2016 - Aug 2019 (3 yrs 8 mos)",
    description: "Led student initiatives and organized school events to enhance student life and responsibility. Assisted in the management of school activities and acted as a point of contact between students and faculty.",
    skills: "Leadership, Team Management, Problem Solving",
    certificateLink: ""
  }
];

const VolunteeringSection = () => {
  return (
    <div className="py-20 lg:py-10 bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="text-left mb-6">
          <h2 className="font-mono text-2xl bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            Leadership and Volunteering Contributions - 
          </h2>
          <p className="text-lg mt-4 text-gray-400">
            These experiences demonstrate my leadership abilities, community involvement, and volunteering efforts to contribute to various organizations and causes.
          </p>
        </div>
        
        <div className="space-y-8">
          {volunteeringAndLeadership.map((item, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.role}</p>
              <p className="text-gray-500 text-sm mb-2">{item.duration}</p>
              <p className="text-white">{item.description}</p>
              <p className="text-gray-400 text-sm mt-4">
                <strong>Skills:</strong> {item.skills}
              </p>

              {item.certificateLink && (
                <a
                  href={item.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 text-sm mt-4 inline-block hover:text-indigo-300 transition duration-300"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteeringSection;
