import React from 'react';
import "./Navbar.css";
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import Body from '../components/Body/Body.jsx';
import Blog from '../components/Blog/BlogPage.jsx'
import Services from '../Services/Services.jsx'
import Testimonials from '../components/Testimonials/Testimonials.jsx'

const Home = () => {
  

  return (
    <>
       {/*Eman Neyaz */}
      
         <Header />
         <Body />
         <Testimonials />
          
      {/*Engy Salama */}
        <Services />
          <Blog />
        
      
   </>
     
    
  );
}

export default Home;