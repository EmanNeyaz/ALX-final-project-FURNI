import React from 'react';
import "./Navbar.css";
import Footer from './Footer';
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { LiaShippingFastSolid } from "react-icons/lia";
import { TiShoppingBag } from "react-icons/ti";
import { BiSupport } from "react-icons/bi";
import { TbTruckReturn } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/products');
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
      
      
      
      <body>
        <section>
          <div className='container'>
            <h2>Why Choose Us</h2>
            <p>Our furniture is modern and stylish, and will look great in any room. We offer a variety of services to help you find the perfect piece for your home.</p>
            <div className='why-us'>
                <div className='why-us-content '>
                  <div>
                     <div className='why-us-item'>
                        <span> <LiaShippingFastSolid /> </span>
                        <h3>Fast  & Free Shipping </h3>
                        <p>free shipping, making it effortless to get your orders delivered to your doorstep </p>
                     </div>
                     <div className='why-us-item'>
                        <span> <BiSupport />
                        </span>
                        <h3>24/7 Support </h3>
                        <p>Need assistance? Our 24/7 support team is always ready to help </p>
                     </div>
                  </div>
                  <div>
                     <div className='why-us-item'>
                        <span> <TiShoppingBag /> </span>
                        <h3>Easy to Shop </h3>
                        <p>Our user-friendly platform ensures easy shopping with just a few clicks. </p>
                     </div>
                     <div className='why-us-item'>
                        <span> <TbTruckReturn /> </span>
                        <h3>Hassle Free Returns </h3>
                        <p>And if you need to return something, our hassle-free returns policy has you covered </p>
                     </div>
                  </div>
        
                </div>
                <img src="\src\assets\why-choose-us-img 1.svg" alt="why"  />
            </div>
            
          </div>
          <section className='blogs'>
                <div className='container line'>
                <h2>Our Blogs</h2>
                <ul>
                <li>  <Link to={"/blog"}>View Full Posts</Link></li>
                </ul>
                </div>
                <div className='container content'>
                  <div className='container blog-card'>
                      <img src="\src\assets\blog-eco.jpg" alt="eco" />
                      <h3>First Time Home Owner Ideas</h3>
                      <span>by Nana Ama on Nov 18th, 2022</span>
                  </div>
                  <div className='container blog-card'>
                      <img src="\src\assets\blog-sofa.jpg" alt="sofa" />
                      <h3>First Time Home Owner Ideas</h3>
                      <span>by Nana Ama on Nov 18th, 2022</span>
                  </div>
                  <div className='container blog-card'>
                      <img src="\src\assets\blog-trends.jpg" alt="trends" />
                      <h3>First Time Home Owner Ideas</h3>
                      <span>by Nana Ama on Nov 18th, 2022</span>
                  </div>
                </div>
                
          </section>
          
          
        </section>
      </body>
      
      
     
    </div>
  );
}

export default Home;