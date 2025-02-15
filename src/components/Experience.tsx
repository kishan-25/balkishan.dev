"use client";

import Image from "next/image";
import CodeXplogo from "@/Images/codexp_logo.jpeg";

export default function Experience() {
    return (
        <div className="flex justify-center flex-col items-center">
            <h1 className="text-4xl font-bold">Experience</h1>
            <div className="flex gap-8 mt-4 justify-center items-center">
                 <div>
                    <Image src={CodeXplogo} alt="codexplogo" className="w-20 h-8"/>
                 </div>
                <p className="text-2xl font-bold">Frontend Developer</p>
            </div>
            <p className="text-xl mt-2">Skills : NextJs, TailwindCSS, HighCharts, Acernity UI, Chadcn/ui</p>
        </div>
    )
}