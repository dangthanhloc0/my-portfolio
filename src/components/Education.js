import React from 'react';

function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University Name",
      period: "2018 - 2022",
      description: "Specialized in Software Engineering with focus on web development and database management."
    },
    {
      degree: "Web Development Certification",
      school: "Coding Bootcamp",
      period: "2022",
      description: "Intensive training in modern web development technologies and best practices."
    }
  ];

  return (
    <div className="education-section">
      <h2>Education</h2>
      <div className="education-container">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <h4>{edu.school}</h4>
            <p className="period">{edu.period}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;