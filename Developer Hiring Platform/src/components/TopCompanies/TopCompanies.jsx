



import React from "react";
import "./TopCompanies.css";

const TopCompanies = () => {
  const features = [
    "Client-Centric Approach",
    "Global Quality Standards",
    "Cutting-Edge Infrastructure",
    "Best-In-Class Project Management",
    "Time-Zone Compatibility",
    "Agile Adaptability",
  ];

  return (
    <section className="top-companies">
      <div className="container">
        {/* Left SVG Illustration */}
        <div className="image-section">
          <img
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/iquxyCWO22.svg"
            alt="Developer coding illustration"
            className="left-svg"
          />
        </div>

        {/* Right Content */}
        <div className="text-section">
          <h2>
            Top Companies Trust ValueCoders <br /> For Hiring Software Developers
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-item">
                <span className="check-icon">✔︎</span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCompanies;
