import { useEffect, useRef } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import AOS from 'aos';
const Hero = ({ darkMode }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = "Full-stack Developer";
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        textRef.current.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);
 AOS.init({ duration: 1000, once: true });
    return () => clearInterval(typingEffect);
  }, []);

  return (
    <section id="home" className="min-h-screen overflow-hidden flex items-center pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div data-aos="fade-right" className="md:w-1/2 md:ml-7 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-orange-500">Abu David</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              <span ref={textRef} className="text-orange-400"></span>
            </h2>
            <p className="text-lg mb-8 max-w-lg">
              Passionate about building dynamic interfaces, crafting cross-platform apps, and developing blockchain solutions.
            </p>
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://github.com/davidabuu" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-medium ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
                aria-label="GitHub"
              >
                <FiGithub className="text-orange-500 text-xl" />
              </a>
              <a 
                href="https://linkedin.com/in/abu-david-527758193" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-medium ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-orange-500 text-xl" />
              </a>
              <a 
                href="mailto:davidabu80@gmail.com" 
                className={`p-3 rounded-full transition-medium ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
                aria-label="Email"
              >
                <FiMail className="text-orange-500 text-xl" />
              </a>
            </div>
            <a 
              href="#contact" 
              className={`inline-block px-8 py-3 rounded-lg font-medium transition-medium ${darkMode ? 'bg-orange-500 hover:bg-orange-600' : 'bg-orange-400 hover:bg-orange-500'} shadow-lg hover:shadow-orange-500/30`}
            >
              Contact Me
            </a>
          </div>

          <div     data-aos="fade-left" className="md:w-1/2 flex justify-center">
            <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${darkMode ? 'border-orange-500' : 'border-orange-400'} shadow-xl`}>
              <div className={`w-full h-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center`}>
                <img 
                  src="/davo.jpg" 
                  alt="Abu David" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f97316'/%3E%3Ctext x='50%' y='50%' font-family='sans-serif' font-size='40' fill='white' text-anchor='middle' dominant-baseline='middle'%3EAD%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className={`absolute -bottom-2 -right-2 w-16 h-16 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} border-4 ${darkMode ? 'border-orange-500' : 'border-orange-400'} flex items-center justify-center`}>
                <span className="text-xs font-bold text-orange-500">5+ YOE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
