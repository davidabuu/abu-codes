import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "Real Estate Dues Management Platform",
    description: "A full-stack application enabling estates to onboard onto a centralized portal where residents can securely pay service dues and bills online.",
    technologies: ["Next.js", "Tailwind CSS", ".NET", "C#", "SQL"],
    demoLink: "https://estateoga.com",
    features: [
      "Implemented user roles (admin, estate manager, resident)",
      "Dashboards and payment flows",
      "Secure APIs"
    ]
  },
  {
  title: "NITDA Job Application Portal",
  description: "A responsive job portal built for the Nigerian IT Development Agency with role-based access and user-friendly admin control.",
  technologies: ["React", "Tailwind CSS", "Redux Toolkit", "Node.js"],
 
  demoLink: "https://nitda-job-portal-psi.vercel.app/",
  features: [
    "Role-based authentication and access control",
    "Admin panel for applicant review and approval",
    "Optimized UI/UX for mobile and desktop"
  ]
},

  {
    title: "Atoovis E-Commerce Platform",
    description: "Built a scalable store and admin system with payment integration and vendor management.",
    technologies: ["Next.js", "Tailwind CSS", "Redux Toolkit", "Node.js", "MongoDB"],
    demoLink: "https://www.atoovis.com/",
    features: [
      "Role-based dashboards",
      "Product catalog & inventory system",
      "Stripe payment integration"
    ]
  },
  {
    title: "NFT Staking Reward System",
    description: "Smart contract staking system where users earn ERC-20 tokens by staking NFTs.",
    technologies: ["Solidity", "Foundry"],
    githubLink: "https://github.com/davidabuu/nft-staking",
    features: [
      "Staking logic implementation",
      "Reward distribution system",
      "Secure withdrawal mechanisms"
    ]
  },
  {
    title: "Web3 Prediction Prize Pool",
description: "Decentralized app for prediction contests with pooled reward systems.",
    technologies: ["Solidity", "Foundry"],
    githubLink: "https://github.com/davidabuu/prediction-prize-pool",
    features: [
      "Pool creation functionality",
      "User participation system",
      "Reward disbursement"
    ]
  },
  {
    title: "Web3 Allowance System",
    description: "Custom smart contract solution to manage access permissions in decentralized apps.",
    technologies: ["Solidity", "Foundry"],
    githubLink: "https://github.com/davidabuu/web3-allowance",
    features: [
      "Flexible permission management",
      "Secure contracts",
      "Multi-role access"
    ]
  }
];

const Projects = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="relative inline-block">
              My Projects
            <span className={`absolute translate-y-1.5 bottom-0 left-0 w-full h-1 ${darkMode ? 'bg-orange-500' : 'bg-orange-400'} rounded-full`}></span>
            </span>
        
           
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className={`rounded-xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} hover:shadow-xl transition-all`}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="mb-4 text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700 text-orange-400' : 'bg-gray-200 text-orange-600'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mb-6 space-y-2 text-sm">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`inline-block w-2 h-2 rounded-full mt-2 mr-2 ${darkMode ? 'bg-orange-500' : 'bg-orange-400'}`}></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-4 text-sm">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                    >
                      <FiGithub className="mr-2" />
                      Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 rounded-lg ${darkMode ? 'bg-orange-500 hover:bg-orange-600' : 'bg-orange-400 hover:bg-orange-500'} text-white`}
                    >
                      <FiExternalLink className="mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
