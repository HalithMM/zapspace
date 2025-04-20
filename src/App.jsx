import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { Service } from './components/Service';
import { Project } from './components/Project';
import { Gallery } from './components/Gallery';
import { LoadingScreen } from './components/LoadingScreen';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
 
import { Overview } from './components/overview';
 
 
// import { Consultation } from './components/Consultation ';
import About from './components/About';
import { Servicepage } from './components/Servicepage';
import { Landing } from './components/landing';
import { Faq } from './components/Faq';
import { ScrollToTop } from './components/ScrollToTop';
import GallerPage from './components/GallerPage';
import { ContactInfo } from './components/Info';
import { Testimonials } from './components/Testimonials';
import Footer from './components/footer';
import { Demo } from './components/Demo';
import { Projects } from './components/Projects'; 
import Teamsection from './components/TeamSection';
 

export const App = () => { 
   const [isLoading, setIsLoading] = useState(true); 
  
   useEffect(() => {
     const timer = setTimeout(() => {
       setIsLoading(false);
     }, 2000);

     return () => clearTimeout(timer);
   }, []);
 
  return (   <Router>
       <ScrollToTop/>
       <div className="relative overflow-x-hidden">
         <AnimatePresence>
           {isLoading ? (
             <LoadingScreen />
           ) : (
             <>
               <Navigation />
               <Routes>
                 <Route path="/" element={
                   <> 
                    <LazyLoad><ContactInfo/></LazyLoad> 
                    <LazyLoad><Landing /></LazyLoad> 
                    <LazyLoad><Overview /></LazyLoad>  
                    <LazyLoad><Service /></LazyLoad>  
                    <LazyLoad><Demo/></LazyLoad> 
                    <LazyLoad><Teamsection/></LazyLoad>
                    <LazyLoad><Testimonials/></LazyLoad>
                    <LazyLoad><Faq/></LazyLoad>   
                   </>
                 } />
                 <Route path="/about" element={<About />} />
                 <Route path="/services" element={<Servicepage />} />
                 {<Route path="/gallery" element={<GallerPage />} />}
                 <Route path="/projects/:projectId" element={<Projects />} />
               </Routes>
               <Footer/>
             </>
           )}
         </AnimatePresence>
       </div>
      </Router>
  );
};