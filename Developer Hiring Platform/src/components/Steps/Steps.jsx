import React, { useState } from 'react';
import './Steps.css';

const Steps = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 0, title: "Benefits of Hiring Developers" },
    { id: 1, title: "Key Factors to Consider While Hiring", active: true },
    { id: 2, title: "Defining Your Project Requirements" },
    { id: 3, title: "Choosing the Right Development Model" },
    { id: 4, title: "Typical Challenges for Hiring Developers" },
    { id: 5, title: "Hiring Freelancers vs. Dedicated Developers" },
    { id: 6, title: "Communication with Remote Developers" }
  ];

  const benefits = [
    "Client-centric approach",
    "Global quality standards",
    "Cutting-edge infrastructure",
    "Best-in-class project management",
    "Time-zone compatibility",
    "Agile adaptability"
  ];

  return (
    <section className="steps">
      <div className="container">
        <div className="steps-header">
          <h2 className="section-title">User Guide to Hire Dedicated Software Developers</h2>
        </div>

        <div className="steps-content">
          {/* Sidebar */}
          <div className="steps-sidebar">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="steps-main">
            <div className="main-content">
              <h3>Benefits of Hiring Developers</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>

              <div className="benefits-grid">
                <div className="benefits-column">
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <div key={index} className="benefit-item">
                      <div className="check-icon">
                        <img
                          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/hmOYxw7WQq.svg"
                          alt="check"
                        />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="benefits-column">
                  {benefits.slice(3).map((benefit, index) => (
                    <div key={index + 3} className="benefit-item">
                      <div className="check-icon">
                        <img
                          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/1yW37NBJR3.svg"
                          alt="check"
                        />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="main-image">
              <img
                src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/A2jVmJvemD.png"
                alt="Development process"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
