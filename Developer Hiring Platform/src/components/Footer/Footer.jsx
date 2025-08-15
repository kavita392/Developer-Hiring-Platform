import React from 'react'
import './Footer.css'

const Footer = () => {
  const quickLinks = [
    "Software Team",
    "Technologies", 
    "Resources",
    "Company",
    "Contact us",
    "FAQ"
  ]

  const services = [
    "Dedicated Development",
    "Staff Augmentation Services",
    "Software Development", 
    "Development Center"
  ]

  const socialIcons = [
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/vybxwgdwuw.svg",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/Sy58zwDedA.svg",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/kmQpXWLEbz.svg",
    "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/8PmWpdES5T.svg"
  ]

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <div className="footer-logo">
                <div className="logo-icon">
                  <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/7GySNEcv60.svg" alt="Logo" />
                </div>
                <span className="logo-text">logoipsum</span>
              </div>
              <p className="footer-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et
              </p>
              <div className="social-icons">
                {socialIcons.map((icon, index) => (
                  <div key={index} className="social-icon">
                    <img src={icon} alt={`Social ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Contact Us</h3>
              <div className="contact-item">
                <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/dzd2LHDwTJ.svg" alt="location" />
                <div>
                  <p>Envato, Level 13, 2 Elizabeth</p>
                  <p>Victoria 3000</p>
                  <p>India</p>
                </div>
              </div>
              <div className="contact-item">
                <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/P3JmEU8tz8.svg" alt="phone" />
                <p>+91 861 944 1176</p>
              </div>
              <div className="contact-item">
                <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/4fDcYsUMk5.svg" alt="email" />
                <p>ezyoga@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>logoname. 2023. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
