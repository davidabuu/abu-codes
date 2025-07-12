import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import icons from react-icons
import { FaHtml5, FaJsSquare, FaReact, FaMobileAlt, FaCss3Alt, FaEthereum, FaNodeJs, FaMicrosoft } from 'react-icons/fa';

const skills = [
  { name: 'HTML/CSS', icon: <FaHtml5 size={24} className="text-orange-500" /> },
  { name: 'JavaScript/TypeScript', icon: <FaJsSquare size={24} className="text-yellow-400" /> },
  { name: 'React.js / Next.js', icon: <FaReact size={24} className="text-cyan-400" /> },
  { name: 'Flutter / App Dev', icon: <FaMobileAlt size={24} className="text-blue-400" /> },
  { name: 'Tailwind CSS', icon: <FaCss3Alt size={24} className="text-teal-400" /> },
  { name: 'Solidity (Sol)', icon: <FaEthereum size={24} className="text-purple-500" /> },
  { name: 'C# / .NET', icon: <FaMicrosoft size={24} className="text-blue-700" /> },
  { name: 'Node.js', icon: <FaNodeJs size={24} className="text-green-600" /> },
];

const Skills = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="skills" className="py-20 overflow-hidden">
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
              className={`p-6 rounded-xl flex items-center gap-4 transition-shadow duration-300 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg hover:shadow-xl`}
            >
              {skill.icon}
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
