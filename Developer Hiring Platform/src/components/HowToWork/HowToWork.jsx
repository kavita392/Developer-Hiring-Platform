import React from 'react'
import './HowToWork.css'

const HowToWork = () => {
  const steps = [
    {
      number: "1",
      title: "Inquiry",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/8yd4ZTH0Ge.svg",
      bgIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/fYCKWV1YY0.svg"
    },
    {
      number: "2", 
      title: "Select Developers",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/mmFSkw8zSQ.svg",
      bgIcon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/nFztV3W6FD.svg"
    },
    {
      number: "3",
      title: "Team Integration", 
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/AGCcV0srxx.svg",
      bgIcon: null
    },
    {
      number: "4",
      title: "Team Scaling",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/6rUp2KNkTu.svg", 
      bgIcon: null
    }
  ]

  return (
    <section className="how-to-work">
      <div className="work-bg">
        <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/epWnHhVLMq.png" alt="Background" />
      </div>
      <div className="container">
        <div className="work-header">
          <h2 className="section-title">Our Hiring Process</h2>
          <p className="section-subtitle">
            Take a look at our simple and straightforward process to hire software developers from ValueCoders.
          </p>
        </div>
        
        <div className="steps-container">
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-icon-container">
                  {step.bgIcon && (
                    <img src={step.bgIcon} alt="background" className="step-bg-icon" />
                  )}
                  <div className="step-circle">
                    <img src={step.icon} alt={step.title} className="step-icon" />
                  </div>
                  <div className="step-number">
                    <span>{step.number}</span>
                  </div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="step-arrow">
                    <img 
                      src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/PDQOQntaPx.svg" 
                      alt="arrow" 
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToWork





