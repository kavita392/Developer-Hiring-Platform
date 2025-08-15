


import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/6r7kzLetrk.svg" alt="Logo" />
            </div>
            <span className="logoipsum">Logoipsum</span>
          </div>
          
          <nav className="nav">
            <div className="nav-item">
              <span>Software Team</span>
              <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/Z3LUKinkgk.svg" alt="dropdown" className="dropdown-icon" />
            </div>
            <span className="nav-item">Services</span>
            <span className="nav-item">Technologies</span>
            <span className="nav-item">Resources</span>
            <span className="nav-item">Company</span>
          </nav>
          
          <button className="btn btn-outline">
            Get in touch
            <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/ChsEMbN680.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
