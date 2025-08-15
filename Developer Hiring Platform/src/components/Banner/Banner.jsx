import React from 'react'
import ContactForm from './ContactForm';

import './Banner.css'

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-bg">
        <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/x7h0nKYjK3.png" alt="Background" />
      </div>
      <div className="container">
        <div className="banner-content">
          <div className="banner-left">
            <h1 className="banner-title">
              <span className="title-highlight">Hire Dedicated</span>
              {/* <span className="title-underline"></span>  <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
          <Title text1={'LATEST'} text2={'COLLECTIONS'} /> */}
              <span className="title-main">Developers</span>
            </h1>
            <p className="banner-subtitle">
              Top 1% Pre-Vetted, In-house & Dedicated Software Programmers
            </p>
            <p className="banner-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled
            </p>
            <div className="banner-buttons">
              <button className="btn btn-primary">
                View More
                <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/MiWCnP9uCD.svg" alt="arrow" />
              </button>
              <button className="btn btn-secondary">
                Get in touch
                <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/CntFOtWGD2.svg" alt="arrow" />
              </button>
            </div>
          </div>
          <div className="banner-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
