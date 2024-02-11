
import './App.css';
import React, { useRef, useEffect } from 'react';
import { customLightTheme, customDarkTheme } from './Themes/Themes'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Box} from '@mui/material';
import { useState } from 'react';
import TopMenu from '../src/Components/TopMenu';
import HomePage from '../src/Components/HomePage';
import CssBaseline from '@mui/material/CssBaseline';
import AboutPage from './Components/AboutPage';
import ExperiencePage from './Components/ExperiencePage';
import ContactPage from './Components/ContactPage';


export default function App() {

  const [currentPalette, setCurrentPalette] = useState(customLightTheme)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const aboutPageRef = useRef<HTMLDivElement | null>(null);
  const experiencePageRef = useRef<HTMLDivElement | null>(null);
  const contactPageRef = useRef<HTMLDivElement | null>(null);
  
  // Function to scroll to a section
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>, offset = 0) => {
    if (sectionRef.current) {
      const topPosition = sectionRef.current.offsetTop - offset;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  };

  /*const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
    if (sectionRef.current) {
      console.log('Scrolling to section:', sectionRef.current);
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };*/

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  const toggleIcon = () => {
    setIsDarkMode((prevMode) => !prevMode);
    setCurrentPalette((prevType) => (prevType === customLightTheme ? customDarkTheme : customLightTheme));
  };
  
const theme = createTheme(currentPalette);

  return (
  <Box>
    <ThemeProvider theme = {theme}>
      <CssBaseline/>
   <TopMenu   
          isDarkMode={isDarkMode}
          onToggle={toggleIcon}
          onScrollToHome={() => scrollToHome()}
          onScrollToAbout={() => scrollToSection(aboutPageRef,0)}
          onScrollToExperience={() => scrollToSection(experiencePageRef,0)}
          onScrollToContact={() => scrollToSection(contactPageRef,60)}
   />
    <HomePage /> 
    <AboutPage ref={aboutPageRef}/> 
    <ExperiencePage ref={experiencePageRef}/>
    <ContactPage ref = {contactPageRef}/>
    </ThemeProvider>
  </Box>
    

  );
}
