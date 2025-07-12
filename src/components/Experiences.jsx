import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const experiences = [
  {
    role: "Frontend Developer",
    company: "Stellus — Remote",
    period: "Jun 2024 – Jul 2025 (1 yr 2 months)",
    responsibilities: [
      "Developed a Web3 user interface allowing users to connect wallets, deploy ERC-20 contracts, and manage smart assets with ease.",
      "Implemented secure authentication with wallet providers (e.g., MetaMask, WalletConnect) and supported multi-chain deployments.",
      "Built reusable UI components and dashboards using Next.js, Tailwind CSS, and TypeScript to display user transaction histories fetched directly from the blockchain.",
      "Collaborated with the backend and smart contract team to ensure seamless integration with EVM-compatible networks.",
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Byteflow Tech — Nigeria",
    period: "Feb 2024–Present",
    responsibilities: [
      "Worked on the SERVICOM admin portal, enabling developers and admins to manage MDA complaints, approve responses, send feedback, and monitor monthly reports and surveys.",
      "Built responsive and intuitive admin dashboards using Next.js, ensuring streamlined complaint resolution workflows.",
      "Led the development of a full-stack real estate application that allows estates to onboard and residents to pay dues online.",
      "Implemented frontend with Next.js and backend APIs using .NET and C#, ensuring secure data flow and robust performance.",
      "Integrated role-based access, dashboards, and payment logic while ensuring scalable architecture and user-friendly UX."
    ]
  },
  {
    role: "Frontend Web Developer",
    company: "NITDA — Nigeria",
    period: "Jan 2024 – Oct 2024 (10 months)",
    responsibilities: [
      "Built a responsive job application portal using React and Tailwind CSS with full user authentication and role-based access.",
      "Implemented core features allowing users to register, log in, and apply for roles, with an admin panel for verification and approvals.",
      "Managed application state efficiently with Redux Toolkit, ensuring smooth UX across all devices."
    ]
  },
  {
    role: "Frontend Web Developer",
    company: "Chainlink Hackathon",
    period: "Oct 2022 – Dec 2022 (3 months)",
    responsibilities: [
      "Participated in a Chainlink hackathon as a front-end Web3 developer, leveraging expertise in React (Next.js), TypeScript, and Ether.js.",
      "Implemented Web3 integration using Ether.js to connect the frontend with the Ethereum network, enabling seamless interaction with smart contract functionalities.",
      "Collaborated with a cross-functional team to align frontend development with smart contract logic and backend functionality."
    ]
  },
  {
    role: "Frontend Web Developer",
    company: "3reen",
    period: "Mar 2021 – Jun 2022 (1 yr 4 months)",
    responsibilities: [
      "Collaborated with an Agile team to design, develop, test, and deploy a full-featured e-commerce platform supporting buying, selling, and vendor operations.",
      "Built and optimized responsive UI components for product listings, cart, checkout, and vendor dashboards, ensuring seamless user experience across devices.",
      "Handled state management with Redux Toolkit and maintained clear documentation for all changes, aiding future development and debugging efforts."
    ]
  }
];
;

const Experience = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="experience" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="relative inline-block">
              Work Experience
            <span className={`absolute translate-y-1.5 bottom-0 left-0 w-full h-1 ${darkMode ? 'bg-orange-500' : 'bg-orange-400'} rounded-full`}></span>
            </span>
         
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className={`relative pl-8 pt-2 pb-6 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl shadow-lg`}
            >
              <div className={`absolute left-0 top-0 h-full w-1 ${darkMode ? 'bg-orange-500' : 'bg-orange-400'} rounded-l-lg`}></div>
              <div className="px-6 py-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-700 text-orange-400' : 'bg-gray-200 text-orange-600'}`}>
                    {exp.company}
                  </span>
                </div>
                <p className={`mb-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.period}</p>
                <ul className="space-y-3 text-sm leading-relaxed">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 shrink-0 ${darkMode ? 'bg-orange-500' : 'bg-orange-400'}`}></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
