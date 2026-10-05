/**
 * data/experience.js — Frontend local static experience data.
 * Fallback when the API is unreachable.
 */

export const experience = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "Tata Steel Ltd.",
    duration: "1 Month",
    location: "Jamshedpur",
    highlights: [
      "Built an internal Resume Builder using ASP.NET and HTML/CSS, enabling staff to generate structured, downloadable resumes via a dynamic 5-section web form.",
      "Shipped a production-ready tool within a 1-month timeline, adopted by HR staff for ongoing documentation."
    ],
    techStack: ["ASP.NET", "HTML", "CSS"]
  },
  {
    id: 2,
    role: "Server-Side Development Intern",
    company: "Stack Infotech Pvt. Ltd.",
    duration: "3 Months",
    location: "Jamshedpur",
    highlights: [
      "Integrated RESTful APIs to fetch and display dynamic data on web interfaces, improving data accessibility for end users.",
      "Tested and debugged API integrations using Postman and browser developer tools to ensure reliable data flow between frontend and backend.",
      "Collaborated with senior developers on real-world tasks, gaining hands-on experience in professional software workflows and Git version control."
    ],
    techStack: ["REST APIs", "Postman", "Git", "JavaScript"]
  }
];
