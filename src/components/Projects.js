import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Fashion Store",
      type: "Team Project",
      teamSize: 2,
      role: "Full-Stack Developer",
      image: "/image/fashion-store.png",
      description: "Web application for users to register, log in, manage profiles, search and purchase fashion items. Admin features include managing inventory, orders, and revenue.",
      responsibilities: [
        "Designed database schema",
        "Implemented backend APIs using ASP.NET Core",
        "Built the frontend using ReactJS and Tailwind CSS"
      ],
      technologies: ["ASP.NET Core", "Entity Framework Core", "JWT", "REST API", "SQL Server", "ReactJS", "Tailwind"],
      github: "https://github.com/dangthanhloc0/WebFashion-Backend.git"
    },
    {
      title: "Online Test",
      type: "Single Project",
      role: "Full-Stack Developer",
      image: "/image/online-test.png",
      description: "Created a test-taking platform with registration, test saving, reviewing, and admin control. Admin can create, edit, delete test, detail test, manage users.",
      responsibilities: [
        "Designed database schema",
        "Implemented backend MVC",
        "Integrated frontend with HTML, CSS, JS"
      ],
      technologies: ["ASP.NET Core", "MVC", "JWT", "SQL Server", "HTML", "CSS", "Javascript", "Bootstrap"],
      github: "https://github.com/dangthanhloc0/TracNgiemOnline.git"
    },
    {
      title: "Cinema",
      type: "Single Project",
      role: "Full-Stack Developer",
      image: "/image/cinema.png",
      description: "Built system for booking movies, reserving seats, ordering snacks. Admin features include managing movies, snacks, and user accounts.",
      responsibilities: [
        "Designed database schema",
        "Implemented backend using WinForms"
      ],
      technologies: ["C#", "WinForms", "SQL Server"],
      github: "https://github.com/dangthanhloc0/Cinema-management.git"
    },
    {
      title: "Tour Booking",
      type: "Team Project",
      teamSize: 5,
      role: "Backend Developer",
      image: "/image/tour-booking.png",
      description: "Developed backend APIs for user registration, login, booking, order handling. Admin can create, edit, delete, and view tour details.",
      responsibilities: [
        "Designed database schema",
        "Implemented backend APIs using Node.js"
      ],
      technologies: ["Node.js", "Express", "MYSQL Workbench", "Redis", "JWT", "REST API"],
      github: "https://github.com/dangthanhloc0/Nodejs.git"
    }
  ];

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-type">{project.type}</span>
              {project.teamSize && <span className="team-size">Team size: {project.teamSize}</span>}
            </div>
            <div className="project-role">{project.role}</div>
            <p className="project-description">{project.description}</p>
            <div className="project-responsibilities">
              <h4>Responsibilities:</h4>
              <ul>
                {project.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
            <div className="project-technologies">
              <h4>Technologies:</h4>
              <div className="tech-tags">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;