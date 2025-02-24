import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import Experience from "@/components/Experience";
import { CardHoverEffectDemo } from "@/components/Certificates";
import { ThreeDCardDemo } from "@/components/Projects";
import Footer from "@/components/Footer";
import Temp from "@/components/Temp";
// import AboutSection from "@/components/About";
// import AchievementsSection from "@/components/KeyAchievements";

export default function Home() {
  return (
       <div>
          <Temp/>
          <Navbar/>
          <Hero/>
          <ThreeDCardDemo/>
          <CardHoverEffectDemo/>
          <Footer/>
       </div>
  );
}
