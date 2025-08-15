import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Krish Bruynson",
      position: "Director, Storloft",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/Sg0T6jL0Bi.svg",
      avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/xMpPs0shkM.svg"
    },
    {
      name: "Krish Bruynson", 
      position: "Director, Storloft",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/oLncVMYt9Y.svg",
      avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/h8kazWoKZ1.svg"
    },
    {
      name: "Krish Bruynson",
      position: "Director, Storloft", 
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/5hC9XVFL7U.svg",
      avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/ace7y8qNeY.svg"
    },
    {
      name: "Krish Bruynson",
      position: "Director, Storloft",
      image: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/dYzoiJBcqC.svg", 
      avatar: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/k9LN1TYnfJ.svg"
    }
  ]

  const StarRating = () => (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <img 
          key={star}
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-13/sq2Hqag4Jz.svg" 
          alt="star" 
          className="star"
        />
      ))}
    </div>
  )

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">What Our Clients Have to Say About Us</h2>
          <p className="section-subtitle">
            Take a look at our simple and straightforward process to hire software
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-image">
                <img src={testimonial.image} alt="Testimonial background" />
                <div className="testimonial-avatar">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </div>
              </div>
              <div className="testimonial-content">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
                <StarRating />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
