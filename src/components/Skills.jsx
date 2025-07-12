import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript/TypeScript', level: 90 },
  { name: 'React.js/Next.js', level: 90 },
  { name: 'Flutter/App Dev', level: 85 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Solidity (Sol)', level: 80 },
  { name: 'C#/.NET', level: 85 },
  { name: 'Node.js', level: 80 },
];

const Skills = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="relative inline-block">
              My Skills
             <span className={`absolute translate-y-1.5 bottom-0 left-0 w-full h-1 ${darkMode ? 'bg-orange-500' : 'bg-orange-400'} rounded-full`}></span>
           
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={index * 100}
              className={`p-6 rounded-xl transition-shadow duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg hover:shadow-xl`}
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-orange-500 font-medium">{skill.level}%</span>
              </div>
              <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
                <div
                  className={`h-full rounded-full transition-all duration-700 ${darkMode ? 'bg-orange-500' : 'bg-orange-400'}`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
