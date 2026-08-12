import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "EstateHub - Estate Management Platform",
    description: "A full‑stack microservices platform that automates estate management — replacing spreadsheets and WhatsApp with a unified system for managers, residents, and admins.",
    technologies: ["React", "TypeScript", ".NET 8", "C#", "MassTransit", "RabbitMQ", "Paystack"],
    demoLink: "https://estate-hub-frontend-dun.vercel.app/",
    features: [
      "Role-based dashboards for Admin, EstateManager, and Resident",
      "Automated dues tracking and payment collection with Paystack",
      "Real-time analytics and reporting",
      "Event-driven architecture with RabbitMQ",
    ]
  },
  {
    title: "SERVICOM Citizen Complaint Portal",
    description: "A self-service portal for citizens to submit, track, and resolve complaints across federal MDAs — turning a paper-driven process into a digital workflow.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Redux Toolkit"],
    demoLink: "https://ecitizenfeedback.servicom.gov.ng/",
    features: [
      "Granular role-based access control (RBAC)",
      "Audit-ready admin console",
      "Real-time complaint tracking and resolution",
      "Monthly reports and survey analytics",
    ]
  },
  {
    title: "Stellus Web3 Contract Deployment Platform",
    description: "A decentralized app that allows users to connect wallets, deploy ERC-20 contracts, view transaction history, and interact with blockchain directly from a frontend interface.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Thirdweb SDK", "Ethers.js"],
    demoLink: "https://www.ozura.dev",
    features: [
      "Connect wallet via MetaMask and WalletConnect",
      "Deploy ERC-20 tokens with configurable metadata",
      "Fetch and display user transactions onchain",
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
    githubLink: "https://github.com/davidabuu/nft-staking-reward",
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
    githubLink: "https://github.com/davidabuu/web3-prediction-prize-pool",
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
    githubLink: "https://github.com/davidabuu/web3-allowance-system",
    features: [
      "Flexible permission management",
      "Secure contracts",
      "Multi-role access"
    ]
  }
];

// ... rest of Projects component stays the same
