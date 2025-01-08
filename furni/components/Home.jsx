import React from 'react';
import "./Navbar.css";
import Footer from './Footer';

function Home() {
  return (
    <div className="home">
      <div>
         <h1>Modern Interior 
             Design Studio</h1>
         <div className='btn-group'>
              <button type='button' className='btn btn-warning'> Shop Now</button>
              <button type='button' className='btn btn-outline-success'>Explore</button>
          </div>
      </div>
      
      
      <div>
        <img src="\src\assets\couch 1.png" alt="couch" />
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;