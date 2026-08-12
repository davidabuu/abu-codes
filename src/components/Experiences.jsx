import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Byteflow Tech — Nigeria",
    period: "Feb 2024 – Jun 2026",
    responsibilities: [
      "Worked on the SERVICOM admin portal (ecitizenfeedback.servicom.gov.ng), enabling developers and admins to manage MDA complaints, approve responses, send feedback, and monitor monthly reports and surveys.",
      "Built responsive and intuitive admin dashboards using Next.js, ensuring streamlined complaint resolution workflows.",
      "Developed EstateHub — a full‑stack microservices platform for estate management with automated dues tracking, payment collection via Paystack, and role-based dashboards for managers, residents, and admins.",
      "Implemented frontend with React + TypeScript and backend with .NET 8, Clean Architecture, CQRS, and MassTransit + RabbitMQ for event-driven communication.",
      "Integrated real-time analytics dashboards giving administrators live visibility into reports, surveys, and payments."
    ]
  },
  // ... rest of experiences
];

// ... rest of Experience component stays the same
