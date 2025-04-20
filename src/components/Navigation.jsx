import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import {
  Home as HomeIcon,
  Info as AboutIcon,
  Work as ServicesIcon,
  PhotoAlbum as GalleryIcon
} from '@mui/icons-material';
import Logo from "../assets/Logo/Logo.jpeg";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: <HomeIcon /> },
    { name: 'About', path: '/about', icon: <AboutIcon /> },
    { name: 'Services', path: '/services', icon: <ServicesIcon /> },
    { name: 'Gallery', path: '/gallery', icon: <GalleryIcon /> },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  // For MUI Bottom Navigation
  const [bottomNavValue, setBottomNavValue] = useState(0);
  const pathToValue = navItems.reduce((acc, item, index) => {
    acc[item.path] = index;
    return acc;
  }, {});

  useEffect(() => {
    setBottomNavValue(pathToValue[location.pathname] || 0);
  }, [location.pathname]);

  const handleBottomNavChange = (event, newValue) => {
    setBottomNavValue(newValue);
    handleNavigation(navItems[newValue].path);
  };

  return (
    <>
      {/* Logo for Mobile - Top Left */}
      {/* <motion.div
        className="fixed top-4 left-4 z-40 md:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1,
          y: 0,
          transition: { delay: 0.2, duration: 0.5 }
        }}
      >
        <img 
          src={Logo} 
          alt="Logo" 
          className="h-10 w-auto cursor-pointer" 
          onClick={() => handleNavigation('/')}
        />
      </motion.div> */}

      {/* Desktop Header Navigation - Hidden on mobile */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
        } hidden md:block`}
        initial={{ y: -100 }}
        animate={{ 
          y: 0,
          transition: { delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.4 } }}
              onClick={() => handleNavigation('/')}
              className="cursor-pointer"
            > 
              <img 
                src={Logo} 
                alt="Logo" 
                className="h-10 w-auto"  
              />
            </motion.div> 
            <motion.nav 
              className="hidden md:flex space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.4 } }}
            >
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(item.path)}
                  className={`text-white/80 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium relative group transition-colors duration-300 ${
                    location.pathname === item.path ? 'text-amber-400' : ''
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 transform ${
                    location.pathname === item.path ? 'scale-x-100' : 'scale-x-0'
                  } group-hover:scale-x-100 origin-left transition-transform duration-300`} />
                </button>
              ))}
            </motion.nav>
          </div>
        </div>
      </motion.header> 

      {/* Mobile Bottom Navigation */}
      <Paper 
        sx={{ 
          position: 'fixed', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          zIndex: 1000,
          display: { xs: 'block', md: 'none' },
          backgroundColor: '#111827',
          boxShadow: '0 -2px 10px rgba(0,0,0,0.2)'
        }} 
        elevation={3}
      >
        <BottomNavigation
          value={bottomNavValue}
          onChange={handleBottomNavChange}
          showLabels
          sx={{
            '& .Mui-selected': {
              color: '#f59e0b !important',
              '& .MuiBottomNavigationAction-label': {
                fontSize: '0.75rem',
                fontWeight: 'medium',
                mt: 0.5
              }
            },
            '& .MuiBottomNavigationAction-label': {
              fontSize: '0.7rem',
              transition: 'font-size 0.2s',
              color: '#9ca3af'
            },
            backgroundColor: '#111827',
            paddingTop: '8px',
            paddingBottom: '8px'
          }}
        >
          {navItems.map((item, index) => (
            <BottomNavigationAction 
              key={index}
              label={item.name} 
              icon={item.icon} 
              sx={{ 
                minWidth: 'auto', 
                px: 0.5,
                color: '#9ca3af',
                '& .MuiBottomNavigationAction-label': {
                  marginTop: '4px'
                }
              }}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </>
  );
};