"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Achievements = () => {
 
  const certificates = [
    {
      id: 1,
      name: "SIH'24 Winner",
      img: "/SIHWinner.jpg",
    },
    {
      id: 2,
      name: "Cyber Security Quiz Winner",
      img: "/CyberSecurity.jpg",
    },
    {
      id: 3,
      name: "Ahouba'24 3rd Position",
      img: "/ahouba.jpg",
    },
    {
      id: 4,
      name: "Authorship acceptance",
      img: "/PaperAcceptance.jpg",
    },
    {
      id: 5,
      name: "Best Paper Award",
      img: "/BestPaper.jpg",
    },
    
  ];

  return (
    <section className="py-20" id="Achievements">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
            Achievements
        </h2>
        
        <div className="w-full">
          <Marquee
            speed={40}
            gradient={false}
            pauseOnHover={true}
          >
            {certificates.map((cert) => (
              <div key={cert.id} className="flex flex-col items-center mx-8">
                <p className="text-sm font-medium mb-2">{cert.name}</p>
                <img
                  
                  src={cert.img} 
                  alt={cert.name} 
                  className="h-44 object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Achievements;