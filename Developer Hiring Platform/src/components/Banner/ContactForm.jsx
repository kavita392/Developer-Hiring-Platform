import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    projectBrief: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="contact-form-wrapper">
      <div className="form-header">
        <h3>Create Your Team</h3>
        <p>Lorem Ipsum is simply dummy text of the printing</p>
      </div>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter you name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter you Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Phone No</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter you Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              name="country"
              placeholder="Enter you Country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="form-group full-width">
          <label>Project Brief</label>
          <textarea
            name="projectBrief"
            placeholder="Enter you Project Brief"
            rows="4"
            value={formData.projectBrief}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <button type="submit" className="btn btn-hire">
          Hire Software Developer
          <img src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/9a3JMzs0vR.svg" alt="arrow" />
        </button>
      </form>
    </div>
  )
}

export default ContactForm
