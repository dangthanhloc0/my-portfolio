import React, { useState } from 'react';

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      title: "Salesforce Administrator",
      issuer: "Simplilearn",
      date: "2025",
      image: "/image/salesforce_Admin_certificate.png",
      description: "Professional certification in Salesforce Administration, covering core concepts and best practices."
    },
    {
      title: "Introduction to C#",
      issuer: "Simplilearn",
      date: "2025",
      image: "/image/CertificateCsharp.png",
      description: "Comprehensive introduction to C# programming language fundamentals and best practices."
    },
    {
      title: "Getting Started With Docker",
      issuer: "Simplilearn",
      date: "2025",
      image: "/image/Docker.png",
      description: "Essential Docker concepts and containerization techniques for modern application deployment."
    }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="certificates" className="certificates-section">
      <h2>Certificates</h2>
      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-item">
            <div className="certificate-image" onClick={() => handleImageClick(cert.image)}>
              <img src={cert.image} alt={cert.title} />
            </div>
            <div className="certificate-content">
              <h3>{cert.title}</h3>
              <div className="certificate-details">
                <span className="issuer">{cert.issuer}</span>
                <span className="date">{cert.date}</span>
              </div>
              <p className="description">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <img src={selectedImage} alt="Certificate" />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;