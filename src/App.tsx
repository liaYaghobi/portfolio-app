
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


export default function App() {

  const [currentPalette, setCurrentPalette] = useState(customLightTheme)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const homePageRef = useRef<HTMLDivElement | null>(null);
  const aboutPageRef = useRef<HTMLDivElement | null>(null);
  
  // Function to scroll to a section
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
    if (sectionRef.current) {
      console.log('Scrolling to section:', sectionRef.current);
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    console.log('Current homePageRef:', homePageRef.current);
    console.log('Current aboutPageRef:', aboutPageRef.current);
  }, []);

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
          onScrollToHome={() => scrollToSection(homePageRef)}
          onScrollToAbout={() => scrollToSection(aboutPageRef)}
   />
    <HomePage  ref={homePageRef} /> 
    <AboutPage ref={aboutPageRef}/> 
    </ThemeProvider>
  </Box>
    

  );
}
