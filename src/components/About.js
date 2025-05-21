import React from 'react';

function About() {
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="profile-image">
          <img src="image/me.png" alt="Dang Thanh Loc" />
        </div>
        <div className="about-text">
          <p>
            I am a passionate Software Developer with a strong foundation in .NET and web technologies. 
            My journey in software development is driven by a deep curiosity for creating efficient, 
            scalable, and user-friendly applications.
          </p>
          <p>
            With expertise in both frontend and backend development, I specialize in building robust 
            web applications using modern technologies. My experience with .NET Core, ASP.NET MVC, 
            and various web frameworks allows me to deliver high-quality solutions that meet complex 
            business requirements.
          </p>
          <p>
            I am particularly interested in cloud technologies and DevOps practices, constantly 
            exploring ways to improve application deployment and scalability. My goal is to create 
            software that not only solves problems but also provides an exceptional user experience.
          </p>
          <p>
            When I'm not coding, I enjoy staying up-to-date with the latest technology trends and 
            contributing to open-source projects. I believe in continuous learning and am always 
            eager to take on new challenges that push my boundaries as a developer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;