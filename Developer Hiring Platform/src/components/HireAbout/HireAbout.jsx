import React from "react";
import "./HireAbout.css";

const HireAbout = () => {
  const rightFeatures = [
    {
      title: "High quality/cost ratio",
      subtitle: "Hire Silicon Valley caliber at half the cost",
      description:
        "Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing.",
      isGreen: true,
    },
    {
      title: "100+ skills available",
      subtitle: "100+ skills available",
      description:
        "Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing.",
      isGreen: false,
    },
  ];

  const leftFeatures = [
    {
      title: "Rigorous Vetting",
      subtitle: "5+ hours of tests and interviews",
      description:
        "Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing.",
      isGreen: true,
    },
    {
      title: "Seniority tests",
      subtitle: "Seniority tests",
      description:
        "Hire the top 1% of 1.5 million+ developers from 150+ countries who have applied to Turing.",
      isGreen: false,
    },
  ];

  return (
    <section className="hire-about">
      {/* Background Images */}
      <img
        src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/ZciijXYn9q.png"
        alt="Decorative Background Right"
        className="bg-right"
      />
      <img
        src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/1x3MeJ0Qfy.png"
        alt="Decorative Background Left"
        className="bg-left"
      />

      {/* Center Heading */}
      <div className="hire-about-center">
        <h2 className="section-title">Why Hire Developers From Our Name</h2>
        < p className="section-subtitle">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since
        </p>
      </div>

      {/* Main Content */}
      <div className="hire-about-wrapper">
        {/* Left column: Image first, then leftFeatures */}
        <div className="hire-about-left">
          <img
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/3ddFS8Pu5w.svg"
            alt="Left Swapped Graphic"
            className="feature-image"
          />
          {leftFeatures.map((feature, idx) => (
            <div key={idx} className="feature-item">
              <div className={`feature-icon ${feature.isGreen ? "green" : "red"}`}></div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <h4>{feature.subtitle}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right column: rightFeatures first, then swapped image */}
        <div className="hire-about-right">
          {rightFeatures.map((feature, idx) => (
            <div key={idx} className="feature-item">
              <div className={`feature-icon ${feature.isGreen ? "green" : "red"}`}></div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <h4>{feature.subtitle}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
          <img
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/9H9LyJ7yJK.svg"
            alt="Right Swapped Graphic"
            className="feature-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HireAbout;
