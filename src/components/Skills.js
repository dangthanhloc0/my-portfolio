import React from 'react';

function Skills() {
  const skillGroups = [
    {
      title: "Backend",
      skills: [
        { name: "C#.NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "ASP.NET Core", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
        { name: "Entity Framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
        { name: "JWT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" },
        { name: "LINQ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "RESTful API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
        { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "TortoiseGit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Swagger", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },
        { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
      ]
    },
    {
      title: "Other Skills",
      skills: [
        { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Salesforce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Time Management", icon: "https://cdn-icons-png.flaticon.com/512/2972/2972541.png" },
        { name: "Problem Solving", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
        { name: "Business Communication", icon: "https://cdn-icons-png.flaticon.com/512/3059/3059995.png" },
        { name: "Teamwork", icon: "https://cdn-icons-png.flaticon.com/512/476/476863.png" },
        { name: "Adaptability", icon: "https://cdn-icons-png.flaticon.com/512/1995/1995570.png" },
        { name: "Analytical Thinking", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
        { name: "Presentation Skills", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
        { name: "Continuous Learning", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" }
      ]
    }
  ];

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillGroups.map((group, index) => (
          <div key={index} className="skills-group">
            <h3 className="skills-group-title">{group.title}</h3>
            <div className="skills-grid-3">
              {group.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-card">
                  <div className="skill-icon">
                    <img src={skill.icon} alt={skill.name} width="32" height="32" />
                  </div>
                  <span className="skill-label">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;