import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import bedroom from '../../assets/bedroom.jpg';
import livingRoom from '../../assets/living-room.jpg';
import diningRoom from '../../assets/dining-room.jpg';

function Services() {
  const services = [
    {
      id: 1,
      title: 'Bedroom Sets',
      description: 'Find the perfect bedroom furniture to create your dream sanctuary.',
      image: bedroom,
      category: 'Bedroom Sets',
      link: '/bedroom-sets',
    },
    {
      id: 2,
      title: 'Living Room',
      description: 'Discover modern and stylish furniture for your living space.',
      image: livingRoom,
      category: 'Living Room',
      link: '/living-room',
    },
    {
      id: 3,
      title: 'Dining Room',
      description: 'Elegant dining sets for unforgettable meals with family and friends.',
      image: diningRoom,
      category: 'Dining Room',
      link: '/dining-room',
    },
  ];

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-description">
        Explore our range of premium furniture categories tailored to your needs.
      </p>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Link to={service.link}>
              <button className="service-button">
                View {service.category}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
