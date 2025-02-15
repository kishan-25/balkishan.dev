"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

// Example images (replace with your own imports)
import MetroImage from "@/assets/metromap.png";
import MLFQImage from "@/assets/MLFQ.png";
import NavsarjanImage from "@/assets/Navsarjan.png";
import GDGImage from "@/assets/GDG.png";
import PortfolioImage from "@/assets/portfolioImage.png";
import StudynotionImage from "@/assets/StudyNotion.png";

export function ThreeDCardDemo() {
  return (
    <>
      <h1 className="text-center text-white font-bold text-4xl">
        Projects
      </h1>
      {/* 
        1-column on mobile, 3 columns on md+; items-stretch makes each grid cell 
        the same height, so all cards match the tallest card in the row.
      */}
      <div className="w-11/12 ml-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Card 1 */}
        <CardContainer className="inter-var text-white w-full h-full">
          <CardBody
            className="
              flex flex-col justify-between
              bg-gray-50
              relative
              group/card
              dark:hover:shadow-2xl
              dark:hover:shadow-emerald-500/[0.1]
              dark:bg-black
              dark:border-white/[0.2]
              border-black/[0.1]
              w-full
              h-full
              rounded-xl
              p-6
              border
            "
          >
            {/* Top Content */}
            <div>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Metro Routing and Scheduling System
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
              >
                Developed a comprehensive system using Dijkstra’s and A* algorithms
                for optimized metro navigation, coupled with constraint programming
                for scheduling. This solution reduces travel time and improves commuter
                satisfaction by providing shortest routes, efficient transfers, and
                adaptive scheduling.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={MetroImage}
                  height="1000"
                  width="1000"
                  className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </div>
            {/* Bottom Content (Button) */}
            <div className="mt-6 flex justify-center items-center">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 w-full rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Github
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Card 2 */}
        <CardContainer className="inter-var text-white w-full h-full">
          <CardBody
            className="
              flex flex-col justify-between
              bg-gray-50
              relative
              group/card
              dark:hover:shadow-2xl
              dark:hover:shadow-emerald-500/[0.1]
              dark:bg-black
              dark:border-white/[0.2]
              border-black/[0.1]
              w-full
              h-full
              rounded-xl
              p-6
              border
            "
          >
            <div>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                NavSarjan
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
              >
                Created a fully integrated web application to revolutionize Gujarat’s
                innovation ecosystem. By centralizing processes related to research, IP,
                and startups, it leverages AI/ML to address key challenges and foster
                cutting-edge innovation.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={NavsarjanImage}
                  height="1000"
                  width="1000"
                  className="h-64 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </div>
            <div className="mt-6 flex justify-center items-center">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 w-full rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Github
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Card 3 */}
        <CardContainer className="inter-var text-white w-full h-full">
          <CardBody
            className="
              flex flex-col justify-between
              bg-gray-50
              relative
              group/card
              dark:hover:shadow-2xl
              dark:hover:shadow-emerald-500/[0.1]
              dark:bg-black
              dark:border-white/[0.2]
              border-black/[0.1]
              w-full
              h-full
              rounded-xl
              p-6
              border
            "
          >
            <div>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Solving Bufferbloat with MLFQ
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
              >
                Implemented an advanced Multilevel Feedback Queue (MLFQ) algorithm
                to mitigate network performance issues like latency, jitter, and bufferbloat.
                This approach optimizes packet prioritization for real-time applications,
                improving throughput and fairness.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={MLFQImage}
                  height="1000"
                  width="1000"
                  className="h-64 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </div>
            <div className="mt-6 flex justify-center items-center">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 w-full rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Github
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Card 4 */}
        <CardContainer className="inter-var text-white w-full h-full">
          <CardBody
            className="
              flex flex-col justify-between
              bg-gray-50
              relative
              group/card
              dark:hover:shadow-2xl
              dark:hover:shadow-emerald-500/[0.1]
              dark:bg-black
              dark:border-white/[0.2]
              border-black/[0.1]
              w-full
              h-full
              rounded-xl
              p-6
              border
            "
          >
            <div>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                GDG Hackathon Website
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
              >
                Built a registration website for the GDG OnCampus Hackathon, simplifying
                the sign-up process and providing participants with essential resources
                and event details.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={GDGImage}
                  height="1000"
                  width="1000"
                  className="h-64 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </div>
            <div className="mt-6 flex justify-center items-center">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 w-full rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Github
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Card 5 */}
        <CardContainer className="inter-var text-white w-full h-full">
          <CardBody
            className="
              flex flex-col justify-between
              bg-gray-50
              relative
              group/card
              dark:hover:shadow-2xl
              dark:hover:shadow-emerald-500/[0.1]
              dark:bg-black
              dark:border-white/[0.2]
              border-black/[0.1]
              w-full
              h-full
              rounded-xl
              p-6
              border
            "
          >
            <div>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Personal Portfolio
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
              >
                Developed a personal portfolio website to showcase projects, skills,
                and experience. Built with modern web technologies for a clean and
                engaging user experience.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={PortfolioImage}
                  height="1000"
                  width="1000"
                  className="h-64 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </div>
            <div className="mt-6 flex justify-center items-center">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 w-full rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Github
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        {/* Card 6 */}
        <CardContainer className="inter-var text-white w-full h-full">
          <CardBody
            className="
              flex flex-col justify-between
              bg-gray-50
              relative
              group/card
              dark:hover:shadow-2xl
              dark:hover:shadow-emerald-500/[0.1]
              dark:bg-black
              dark:border-white/[0.2]
              border-black/[0.1]
              w-full
              h-full
              rounded-xl
              p-6
              border
            "
          >
            <div>
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Ed-Tech Platform
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
              >
                Built an interactive platform for online education, offering course
                management, user enrollment, and rich learning resources, enhancing
                the digital learning experience for students and educators.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={StudynotionImage}
                  height="1000"
                  width="1000"
                  className="h-64 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </div>
            <div className="mt-6 flex justify-center items-center">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 w-full rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Github
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
}
