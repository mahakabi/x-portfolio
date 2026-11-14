// ─────────────────────────────────────────────────────────────
//  YOUR CV LIVES HERE.
//  Fill every field from the CV you were given.
//  The pages read from this file, so you never hard-code CV text
//  inside a component. Add or remove items freely.
// ─────────────────────────────────────────────────────────────

export const cv = {
  name: "Your Name",
  title: "Your Role, e.g. Software Engineering Student",
  location: "Riyadh, Saudi Arabia",
  summary:
    "Two or three sentences about who you are, what you build and what you are looking for.",

  contact: {
    email: "you@example.com",
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-username",
  },

  // Put your CV PDF in the /public folder and write its file name here.
  // Leave it as "" to hide the "Download CV" button.
  cvFile: "",

  education: [
    {
      degree: "B.Sc. in Software Engineering",
      school: "Al Yamamah University",
      period: "2023 – 2027",
      details: "GPA, honours, or relevant courses.",
    },
  ],

  experience: [
    {
      role: "Frontend Developer Intern",
      company: "Company Name",
      period: "Jun 2026 – Aug 2026",
      points: [
        "What you did and the impact it had.",
        "Another achievement, with a number if you have one.",
      ],
    },
  ],

  // Each project gets its own page at /projects/<slug>.
  // slug = short, lowercase, words joined with "-" (used in the URL).
  projects: [
    {
      slug: "weather-app",
      name: "Weather App",
      summary: "One line that explains what the project does.",
      description:
        "A longer description for the project page: the problem, what you built, and what you learned.",
      tech: ["Next.js", "Tailwind CSS", "OpenWeather API"],
      demo: "",
      repo: "https://github.com/your-username/weather-app",
    },
    {
      slug: "task-manager",
      name: "Task Manager",
      summary: "One line that explains what the project does.",
      description:
        "A longer description for the project page: the problem, what you built, and what you learned.",
      tech: ["React", "Node.js", "MongoDB"],
      demo: "",
      repo: "",
    },
  ],

  skills: [
    { group: "Languages", items: ["JavaScript", "Python", "SQL"] },
    { group: "Frameworks", items: ["React", "Next.js", "Tailwind CSS"] },
    { group: "Tools", items: ["Git", "GitHub", "Figma"] },
  ],

  achievements: [
    { title: "Hackathon winner", detail: "Event name, year, what you built." },
    { title: "Certificate", detail: "Issuer, year." },
  ],
};
