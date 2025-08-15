import React from "react";
import "./Software.css";

const Software = () => {
  const benefits = [
    "English Speaking Programmers",
    "Flexible Work Hours",
    "Rapid Onboarding Process",
    "Expertise In Top Technologies",
    "Reliable Partner Credentials",
  ];

  return (
    <section className="software-section">
      {/* <div className="software-content"> */}
          <div  div className="software-left">
          <h2>
            Why Hire Software Developers <br /> In India?
          </h2>
          </div>
           <div className="software-content">
        
        <div className="software-bg">
          <img
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/TtiF6PjytC.png"
            alt="Office silhouette background"
          />
         
          <div className="overlay"></div>
        </div>
        <div className="software-text">
          {/* <h2>
            Why Hire Software Developers <br /> In India?
          </h2> */}
       
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index}>
                {benefit} <span className="arrow">↗</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Software;
