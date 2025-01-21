import React, { useState, useEffect } from 'react';
import './Testimonials.css'; 
import Testi1 from '../../../assets/testi1.svg'
import Testi2 from '../../../assets/testi2.svg'
import Testi3 from '../../../assets/testi3.svg'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: 'Floyd Miles',
      image: Testi1,
      text: 'Love my new sofa! It\'s incredibly comfortable and stylish. Delivery was super quick too. ThanksFurni',
    },
    {
        name: 'Ronald Richards',
        image: Testi2,
        text: 'Excellent customer service! They helped me choose the perfect dining table for my space. Highly recommend.'
      },
      {
        name: 'Savannah Nguyen',
        image: Testi3,
        text: 'I was looking for a unique coffee table and found exactly what I wanted at FURNI. The ordering process was easy, and the delivery was on time. The table itself is a statement piece and I get compliments on it all the time'
      },
    
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextTestimonial, 5000); // Change interval time as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <div className="testimonial-slider">
        <button className="prev-btn" onClick={prevTestimonial}>
          <span><IoIosArrowDropleftCircle /></span>
        </button>
        <div className="testimonial-card">
          <img src={testimonialsData[currentTestimonial].image} alt={testimonialsData[currentTestimonial].name} />
          <div className="testimonial-text">
            <p>{testimonialsData[currentTestimonial].text}</p>
          </div>
          <div className="testimonial-author">
            <p>{testimonialsData[currentTestimonial].name}</p>
          </div>
        </div>
        <button className="next-btn" onClick={nextTestimonial}>
          <span><IoIosArrowDroprightCircle /></span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;