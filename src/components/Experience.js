import React from 'react';

function Experience() {
  return (
    <div className="experience-section">
      <h2>Work Experience</h2>
      <div className="experience-container">
        <div className="experience-item">
          <h3>IVS Joint Stock Company</h3>
          <h4>Software Engineer Intern – Fresher</h4>
          
          <div className="experience-project">
            <h5>Java VersionUp (10/2024 – 01/2025)</h5>
            <div className="role">Role: Developer, Tester</div>
            <ul className="responsibilities">
              <li>Reviewed and modified HTML, CSS and jQuery to match the old system</li>
              <li>Created and executed Unit Test Cases (UTC), Unit Test Evidence (UTE), and checklists</li>
            </ul>
            <div className="technologies">
              <span className="tech-label">Technologies:</span>
              <div className="tech-tags">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">SQL</span>
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JS</span>
                <span className="tech-tag">jQuery</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Oracle</span>
                <span className="tech-tag">TortoiseGit</span>
              </div>
            </div>
          </div>

          <div className="experience-project">
            <h5>Convert RPG to Java (05/2024 – 10/2024)</h5>
            <div className="role">Role: Developer, Tester</div>
            <ul className="responsibilities">
              <li>Debugged and optimized Java code to ensure alignment with customer requirements and specifications</li>
              <li>Fixed Java error codes based on the customer's handbook</li>
              <li>Created and executed Unit Test Cases (UTC), Unit Test Evidence (UTE), and checklists</li>
              <li>Collaborated with team members to ensure smooth migration from RPG to Java</li>
            </ul>
            <div className="technologies">
              <span className="tech-label">Technologies:</span>
              <div className="tech-tags">
                <span className="tech-tag">Java</span>
                <span className="tech-tag">SQL</span>
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">TortoiseGit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;