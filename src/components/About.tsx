// components/AboutSection.tsx
import { FC } from 'react';

interface Achievement {
  value: string;
  label: string;
}

const achievements: Achievement[] = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "1", label: "Research Paper" },
  { value: "SIH", label: "Winner" }
];

const AboutSection: FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* About Content */}
          <div className="md:w-1/2 animate__animated animate__fadeInLeft">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Me
            </h2>
            <div className="bg-neutral-700 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                I7apos;m Balkishan, a passionate Full Stack Developer with a proven track record 
                of innovation and research. As an SIH winner, I&apos;ve demonstrated my ability 
                to solve complex problems and create impactful solutions.
              </p>
              <p className="text-gray-300 mb-4">
                My research work has been published in IATMSI, where I explored cutting-edge 
                technologies and their applications. This experience has enhanced my analytical 
                skills and deepened my understanding of technology&apos;s potential.
              </p>
              <p className="text-gray-300">
                I specialize in building robust web applications, combining both frontend 
                and backend technologies to create seamless user experiences. My approach 
                focuses on writing clean, maintainable code and implementing scalable solutions.
              </p>
            </div>
          </div>

          {/* Achievement Grid */}
          <div className="md:w-1/2 animate__animated animate__fadeInRight">
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-neutral-700 p-6 rounded-lg text-center"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-gray-300">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;