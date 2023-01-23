import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './style/adminlte.css';
import './style.css';
import './Aboutpage/about.css';
import './Gallerypage/Gallrey.css';
import './Blogpage/blog.css';
import './contact/Contact.css';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



import Home from './Home';
import Aboutpage from './Aboutpage/Aboutpage';
import Servicepage from './Service/Servicepage';
import Gallerypage from './Gallerypage/Gallerypage';
import { Route, Routes } from 'react-router-dom';
import Blogpage from './Blogpage/Blogpage';
import Contactpage from './contact/Contactpage';
import Login from './Login';
import Dash from './Dash';



function App() {
  return (
    
        <>
        
            <Routes>
            
            <Route path='/home' element={<Home/>}/>      

            <Route path='/' element={<Home/>}/>      
            <Route path='/about' element={<Aboutpage/>}/>
            <Route path='/service' element={<Servicepage/>}/>
            <Route path='/gallery' element={<Gallerypage/>}/>
            <Route path='/blog' element={<Blogpage/>}/>
            <Route path='/contact' element={<Contactpage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dash' element={<Dash/>}/>
            
          

            </Routes>

        </>  
  
  );
}

export default App;
