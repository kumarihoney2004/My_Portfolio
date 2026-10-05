/**
 * data/projects.js — Frontend project data.
 * Used for fallback if the API is unavailable.
 */

export const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    role: "Full Stack Developer",
    company: "Personal Project",
    category: "Full Stack",
    featured: true,
    description: "A fully functional full-stack e-commerce web application with product listings, user authentication, and order workflows.",
    highlights: [
      "Built a fully functional full-stack e-commerce web application using HTML, CSS, JavaScript, and MySQL.",
      "Implemented RESTful API calls to handle product listing, user authentication, and order management workflows.",
      "Used Fetch API to connect the frontend with backend endpoints, enabling dynamic content loading without page refreshes.",
      "Applied clean MVC-style project structure, improving code maintainability and scalability."
    ],
    techStack: ["HTML", "CSS", "JavaScript", "MySQL", "REST API", "Fetch API"],
    githubUrl: "https://github.com/kumarihoney2004/ecommerce-catalog",
    liveUrl: ""
  },
  {
    id: 2,
    title: "Karyamitra – Service Provider Platform (Backend Update)",
    role: "Backend Developer",
    company: "Platform Project",
    category: "Backend",
    featured: true,
    description: "Backend architecture updates and RESTful API endpoints for connecting users with local service professionals.",
    highlights: [
      "Worked on a backend update for Karyamitra, a service-provider platform connecting users with local service professionals.",
      "Designed and implemented RESTful APIs to support core platform features and improve backend data handling.",
      "Collaborated with the existing codebase to integrate new endpoints while maintaining consistency with established architecture."
    ],
    techStack: ["Node.js", "Express", "REST API"],
    githubUrl: "https://github.com/kumarihoney2004/karyamitra-backend",
    liveUrl: ""
  }
];

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Netaji Subhas University',
    location: 'Jamshedpur, Jharkhand',
    period: '2023 – 2026',
    status: 'Completed',
    description:
      'Studying core computing fundamentals including Data Structures, OOP, Database Management, Operating Systems, Software Engineering, and Web Development.',
    icon: '🎓',
  },
  {
    id: 2,
    degree: 'Senior Secondary — Class XII (CBSE)',
    institution: 'DBMS Kadma High School',
    location: 'Jamshedpur, Jharkhand',
    period: '2021 – 2023',
    status: 'Completed',
    description:
      'Completed senior secondary education with focus on Mathematics and Computer Science under the CBSE curriculum.',
    icon: '📚',
  },
  {
    id: 3,
    degree: 'Secondary — Class X (CBSE)',
    institution: 'DBMS Kadma High School',
    location: 'Jamshedpur, Jharkhand',
    period: '2020 – 2021',
    status: 'Completed',
    description:
      'Completed secondary school education under the CBSE board.',
    icon: '🏫',
  },
];
