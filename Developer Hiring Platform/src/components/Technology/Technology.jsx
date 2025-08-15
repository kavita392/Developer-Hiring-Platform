import React from 'react'
import './Technology.css'

const Technology = () => {
  const technologies = [
    {
      title: "Backend Development",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/zMwyec3G7u.png",
      bgColor: "#F3F5FF",
      borderColor: "#B0BDFF",
      techs: [".NET", "C/C++", "Django", "Firebase", "Golang", "Symfony", "Laravel", "Node", "PHP", "Python", "Ruby on Rails", "Java"]
    },
    {
      title: "Fronted Development",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/h39SKV8rks.png",
      bgColor: "#FFF3E6",
      borderColor: "#FFC093",
      techs: [".NET", "C/C++", "Django", "Firebase", "Golang", "Symfony", "Laravel", "Node", "PHP", "Python", "Ruby on Rails", "Java"]
    },
    {
      title: "Mobile Development",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/h5hOwbOekh.png",
      bgColor: "#FBEEFD",
      borderColor: "#F6BCFF",
      techs: [".NET", "C/C++", "Django", "Firebase", "Golang", "Symfony", "Laravel", "Node", "PHP", "Python", "Ruby on Rails", "Java"]
    },
    {
      title: "Blockchain, Ai/ML",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/DSuhuVCrSR.png",
      bgColor: "#EFFDFF",
      borderColor: "#9FF3FF",
      techs: [".NET", "C/C++", "Django", "Firebase", "Golang", "Symfony", "Laravel", "Node", "PHP", "Python", "Ruby on Rails", "Java"]
    },
    {
      title: "DevOps & Low-Code",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/QkLFpnArfd.png",
      bgColor: "#FBFFF1",
      borderColor: "#FFDAA2",
      techs: [".NET", "C/C++", "Django", "Firebase", "Golang", "Symfony", "Laravel", "Node", "PHP", "Python", "Ruby on Rails", "Java"]
    },
    {
      title: "E-commerce & CMS",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/qCnowReQ6V.png",
      bgColor: "rgba(255, 188, 188, 0.26)",
      borderColor: "#FFBCBC",
      techs: [".NET", "C/C++", "Django", "Firebase", "Golang", "Symfony", "Laravel", "Node", "PHP", "Python", "Ruby on Rails", "Java"]
    }
  ]

  return (
    <section className="technology">
      <div className="container">
        <div className="technology-header">
          <img 
            src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/zdpwRBgrsL.png" 
            alt="Technology icon" 
            className="tech-header-icon"
          />
          <h2 className="section-title">Our Diverse Technology Competency</h2>
          <p className="section-subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since
          </p>
        </div>
        
        <div className="technology-grid">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="tech-card"
              style={{ backgroundColor: tech.bgColor }}
            >
              <div className="tech-card-header">
                <img src={tech.icon} alt={tech.title} className="tech-icon" />
                <h3>{tech.title}</h3>
              </div>
              
              <div className="tech-list">
                {tech.techs.map((techName, techIndex) => (
                  <span key={techIndex} className="tech-item">
                    {techName}
                  </span>
                ))}
              </div>
              
              <div 
                className="tech-card-border"
                style={{ backgroundColor: tech.borderColor }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technology
