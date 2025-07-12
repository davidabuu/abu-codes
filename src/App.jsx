import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from './components/Skills';
import Experience from './components/Experiences';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contacts';
import Footer from './components/Footer';


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeSection={activeSection}
      />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
       <Skills darkMode={darkMode} />
         <Experience darkMode={darkMode} />
           <Projects darkMode={darkMode} />
            <Education darkMode={darkMode} />
             <Contact darkMode={darkMode} />
      
     
      
     
     
     
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;