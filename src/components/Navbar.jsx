import { useEffect, useState } from 'react';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ darkMode, setDarkMode, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-slow ${scrolled ? 'py-2' : 'py-4'} ${darkMode ? 'bg-gray-900/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold transition-medium hover:text-orange-500">
            Abu David
          </a>

        
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-1 py-2 transition-medium ${activeSection === item.id ? 'text-orange-500 font-medium' : 'hover:text-orange-500'}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full animate-fadeIn"></span>
                )}
              </a>
            ))}

           
            <a
              href="https://drive.google.com/file/d/17BrFWv19M7lA2M-mazwJO8qekB6joZpo/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-4 px-4 py-2 rounded-lg font-medium transition-medium ${darkMode ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-orange-400 text-white hover:bg-orange-500'}`}
            >
              My Résumé
            </a>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-medium ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun className="text-orange-400" /> : <FiMoon className="text-orange-500" />}
            </button>
          </nav>

         
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-medium ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun className="text-orange-400" /> : <FiMoon className="text-orange-500" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-medium ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="text-orange-500" /> : <FiMenu className="text-orange-500" />}
            </button>
          </div>
        </div>

       
        {isOpen && (
          <div className={`md:hidden mt-4 py-4 rounded-lg transition-slow animate-fadeIn ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 transition-medium ${activeSection === item.id ? 'text-orange-500 font-medium' : 'hover:text-orange-500'}`}
                >
                  {item.label}
                </a>
              ))}

            
              <a
                href="https://drive.google.com/file/d/17BrFWv19M7lA2M-mazwJO8qekB6joZpo/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-lg text-center font-medium transition-medium ${darkMode ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-orange-400 text-white hover:bg-orange-500'}`}
              >
                My Résumé
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
