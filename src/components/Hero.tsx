"use client";
import Image from "next/image";
import mainicon from "@/Images/mainIcon.svg";

export default function Hero() {
  return (
    <div id="hero" className="w-10/12 mx-auto flex flex-col md:flex-row items-center gap-10 py-10">
      
      {/* Left Section */}
      <div className="flex flex-col gap-4 md:w-1/2">
        <h1 className="text-5xl font-bold mt-8">
          Trust me, I&apos;m a{" "}
          <span className="text-cyan-400">software engineer.</span>
        </h1>
        
        <p className="text-md text-left text-gray-300">
          A results-driven software developer with a strong foundation in 
          algorithms and full-stack development. Passionate 
          about tackling complex challenges, I specialize in C++, React, 
          Node.js, Django, Next.js, and system optimization—crafting scalable, 
          high-performance solutions that drive efficiency and innovation.
        </p>
        
        <p className="text-gray-400 italic">~ ChatGPT</p>

        <p className="text-lg text-gray-300">
          <span className="text-cyan-400 font-semibold">Building</span>{" "}
          <span className="font-bold text-white">next-gen solutions ✨</span>
        </p>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-1/2">
        <Image
          src={mainicon}
          alt="main icon"
          height={400}
          width={400}
          className="rounded-lg shadow-lg"
        />
      </div>

    </div>
  );
}
