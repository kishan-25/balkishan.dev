"use client";
import Link from "next/link";

interface NavItems {
        name:string;
        link:string;
}

export default function Navbar() {

    const navItems : NavItems[] = [
        {
            name:"Balkishan",
            link:"/",
        },
        {
            name:"About",
            link:"#about",
        },
        
        {
            name:"Projects",
            link:"#projects",
        },
        {
            name:"Achievements",
            link:"#achievements",
        },
        {
            name:"Experience",
            link:"#experience",
        },
        {
            name:"Footer",
            link:"#footer",
        }
    ];

    return (
        <div className="relative top-10 z-50 flex justify-between shadow-md ml-32">
           {
                <ul className="flex gap-6 bg-zinc-800 p-5 rounded-md">
                    {
                        navItems.map( (item,index) => (
                            <li key={index}>
                                <Link href={item.link}>
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
           }
        </div>
    );
}
