import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const education = [
  {
    degree: "Bachelor's degree, Computer Engineering",
    institution: "Afe Babalola University",
    period: "2018–2023",
    description: "Completed a comprehensive program in computer engineering with focus on software development, algorithms, and system design."
  }
];

const certifications = [
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "2022"
  }
];

const Education = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div data-aos="fade-up" className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="relative inline-block">
              Education & Certifications
            <span className={`absolute translate-y-1.5 bottom-0 left-0 w-full h-1 ${darkMode ? 'bg-orange-500' : 'bg-orange-400'} rounded-full`}></span>
            </span>
         
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-semibold mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                    <p className="font-medium mb-1">{edu.institution}</p>
                    <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{edu.period}</p>
                    <p>{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div data-aos="fade-left">
              <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <h4 className="text-xl font-bold mb-2">{cert.title}</h4>
                    <p className="font-medium mb-1">{cert.issuer}</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
