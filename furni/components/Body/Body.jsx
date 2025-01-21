import React from 'react';
import "./Body.css";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TiShoppingBag } from "react-icons/ti";
import { BiSupport } from "react-icons/bi";
import { TbTruckReturn } from "react-icons/tb";


const Home = () => {



  return (
      
      <body>
        <section>
          <div className='container main'>
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
        </section>

         
      </body>
      
      
     
    
  );
}

export default Home;