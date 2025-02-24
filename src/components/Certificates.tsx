import { HoverEffect } from "./ui/card-hover-effect";

// Polished descriptions and replaced link with image
export const projects = [
 
  {
    title: "Ahouba 3rd Position",
    description:
      "Achieved a noteworthy third place in the Ahouba competition, showcasing creativity and innovation.",
    image: "/Images/Ahouba.png",
  },
  {
    title: "SIH Winner",
    description:
      "An advanced technology solution recognized in the Smart India Hackathon, demonstrating exceptional engineering and problem-solving skills.",
    image: "/Images/SIH.png",
  },
  {
    title: "Quiz Winner",
    description:
      "Secured victory in a challenging quiz competition, highlighting broad knowledge and quick thinking under pressure.",
    image: "/Images/Datapro.png",
  },
];

export function CardHoverEffectDemo() {
  return (
    <div id="achievements">
       <h1 className="text-center font-bold text-3xl">Achievements</h1>
        <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
