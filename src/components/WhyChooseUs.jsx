import React from "react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Comprehensive Solutions",
      description:
        "From AI and blockchain to software development and cloud computing, we offer a full range of services to meet your technology needs.",
    },
    {
      title: "Tailored Approach",
      description:
        "Every business is unique, and our solutions are customized to address your specific challenges and objectives.",
    },
    {
      title: "Cutting-Edge Technologies",
      description:
        "We stay ahead of the curve by integrating the latest technologies, including AI, blockchain, and RPA, into our solutions.",
    },
    {
      title: "Expert Team",
      description:
        "Our team brings years of experience and expertise to every project, ensuring high-quality, reliable, and scalable solutions.",
    },
    {
      title: "End-to-End Services",
      description:
        "We guide you through every phase of your digital transformation, from consultation to development and deployment.",
    },
  ];

  return (
    <div style={{ backgroundColor: "black" }}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Why Choose Us?</h2>
        <div style={styles.grid}>
          {reasons.map((reason, index) => (
            <div key={index} style={styles.card}>
              <h3 style={styles.cardTitle}>{reason.title}</h3>
              <p style={styles.cardDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "40px",
    color: "#ffffff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    ":hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
    },
  },
  cardTitle: {
    fontSize: "1.25rem",
    marginBottom: "10px",
    color: "#2c3e50",
  },
  cardDescription: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.5",
  },
};

export default WhyChooseUs;
