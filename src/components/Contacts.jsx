import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

const Contact = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div data-aos="fade-up" className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="relative inline-block">
              Get In Touch
              <span className={`absolute translate-y-1.5 bottom-0 left-0 w-full h-1 ${darkMode ? 'bg-orange-500' : 'bg-orange-400'} rounded-full`}></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              data-aos="fade-right"
              className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <FiMail className="text-orange-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:davidabu80@gmail.com"
                      className={`hover:text-orange-500 transition-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      davidabu80@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <FiLinkedin className="text-orange-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/in/abu-david-527758193"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:text-orange-500 transition-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      linkedin.com/in/abu-david-527758193
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start">
                  <div className={`p-3 rounded-full mr-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <FiGithub className="text-orange-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium">GitHub</h4>
                    <a
                      href="https://github.com/davidabuu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:text-orange-500 transition-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                      github.com/davidabuu
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              data-aos="fade-left"
              className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-lg`}
            >
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-orange-500' : 'bg-white border-gray-300 focus:border-orange-400'} focus:outline-none focus:ring-1 ${darkMode ? 'focus:ring-orange-500' : 'focus:ring-orange-400'} transition-medium`}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-orange-500' : 'bg-white border-gray-300 focus:border-orange-400'} focus:outline-none focus:ring-1 ${darkMode ? 'focus:ring-orange-500' : 'focus:ring-orange-400'} transition-medium`}
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 focus:border-orange-500' : 'bg-white border-gray-300 focus:border-orange-400'} focus:outline-none focus:ring-1 ${darkMode ? 'focus:ring-orange-500' : 'focus:ring-orange-400'} transition-medium`}
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`flex items-center justify-center w-full px-6 py-3 rounded-lg font-medium transition-medium ${darkMode ? 'bg-orange-500 hover:bg-orange-600' : 'bg-orange-400 hover:bg-orange-500'} shadow-lg hover:shadow-orange-500/30`}
                >
                  <FiSend className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
