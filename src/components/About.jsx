import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 relative inline-block">
            About Me
          <span className={`absolute translate-y-1.5 bottom-0 left-0 w-full h-1 ${darkMode ? 'bg-orange-500' : 'bg-orange-400'} rounded-full`}></span>
            
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Get to know more about my skills, experience, and interests.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className={`mt-10 rounded-2xl p-6 md:p-10 transition-all shadow-xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
        >
          <p className="text-lg mb-6 leading-relaxed">
            I’m a <span className="font-semibold text-orange-500">Full-stack Developer</span> with 5+ years of experience, skilled in modern technologies like React.js, Redux.js, Next.js, JavaScript, .NET, C#, and SQL.
          </p>

          <hr className={`my-6 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`} />

          <p className="text-lg mb-6 leading-relaxed">
            I’m passionate about crafting responsive user interfaces, building cross-platform apps with Flutter, and developing smart contracts using Solidity. I thrive in fast-paced, collaborative environments and enjoy integrating Web3 capabilities into full-stack applications.
          </p>

          <hr className={`my-6 ${darkMode ? 'border-gray-700' : 'border-gray-300'}`} />

          <p className="text-lg leading-relaxed">
            Outside of coding, I enjoy learning new tech, contributing to open-source, and mentoring upcoming developers. I believe in continuous growth and building tools that create impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
