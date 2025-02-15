import { FC } from 'react';

const AchievementsSection: FC = () => {
  return (
    <div className="min-h-screen bg-neutral-900">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Key Achievements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* SIH Winner Card */}
            <div className="bg-neutral-800 rounded-xl p-6 transform hover:scale-105 transition duration-300">
              <div className="bg-blue-500/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Smart India Hackathon Winner</h3>
              <p className="text-gray-400">Recognized for innovative solution development in the prestigious Smart India Hackathon competition.</p>
            </div>

            {/* Research Paper Card */}
            <div className="bg-neutral-800 rounded-xl p-6 transform hover:scale-105 transition duration-300">
              <div className="bg-blue-500/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Published Research Paper</h3>
              <p className="text-gray-400">Research paper published in IATMSI, contributing to the academic community with innovative findings.</p>
            </div>

            {/* Full Stack Developer Card */}
            <div className="bg-neutral-800 rounded-xl p-6 transform hover:scale-105 transition duration-300">
              <div className="bg-blue-500/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Full Stack Developer</h3>
              <p className="text-gray-400">Expertise in both frontend and backend development, creating comprehensive web solutions.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-neutral-800 rounded-full px-6 py-3">
              <span className="text-blue-400 mr-2">🎯</span>
              <span className="text-white">Always striving for excellence and innovation</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AchievementsSection;