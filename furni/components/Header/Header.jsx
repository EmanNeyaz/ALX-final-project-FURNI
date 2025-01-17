import React from 'react';
import "./Header.css";
import { useNavigate } from 'react-router-dom';
import { LiaShippingFastSolid } from "react-icons/lia";
import { TiShoppingBag } from "react-icons/ti";
import { BiSupport } from "react-icons/bi";
import { TbTruckReturn } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/services');
  };

  const handleExploreClick = () => {
    navigate('/about');
  };

  return (
    <div className="">
      <div className='home-container'>
      <div className='home'>
         <h1>Modern Interior 
             Design Studio</h1>
         <div className='btn-group'>
              <button type='button' className='btn btn-warning' onClick={handleShopNowClick}> Shop Now</button>
              <button type='button' className='btn btn-outline-success' onClick={handleExploreClick}>Explore</button>
          </div>
           
      </div>
            <div>
                <img src="\src\assets\couch 1.png" alt="couch" />
           </div>
      </div>
      
      
      
      
     
    </div>
  );
}

export default Home;