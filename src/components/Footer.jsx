import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div data-aos="fade-up" className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0 hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold">
                <span className="text-orange-500">Abu</span> David
              </h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Full-stack Developer & Blockchain Enthusiast
              </p>
            </div>

            <div className="flex space-x-6 mb-6 md:mb-0">
              <a
                href="https://github.com/davidabuu"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
                aria-label="GitHub"
              >
                <FiGithub className="text-orange-500 text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/abu-david-527758193"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-orange-500 text-xl" />
              </a>
              <a
                href="mailto:davidabu80@gmail.com"
                className={`p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
                aria-label="Email"
              >
                <FiMail className="text-orange-500 text-xl" />
              </a>
            </div>
          </div>

          <div className={`border-t pt-8 ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className={`mb-4 md:mb-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © {new Date().getFullYear()} Abu David. All rights reserved.
              </p>

              <button
                onClick={scrollToTop}
                className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
                aria-label="Back to top"
              >
                <FiArrowUp className="text-orange-500 mr-2" />
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
