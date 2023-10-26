
import './App.css';
import { customLightTheme, customDarkTheme } from './Themes/Themes'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Box, IconButton} from '@mui/material';
import {DarkMode, LightMode} from '@mui/icons-material';
import { useState } from 'react';
import TopMenu from '../src/Components/TopMenu';


export default function App() {

  const [currentPalette, setCurrentPalette] = useState(customLightTheme)
  const [isLightMode, setIsLightMode] = useState(true)

  const toggleIcon = () => {
    if(!isLightMode){
      setIsLightMode(true)
    }
    else{
      setIsLightMode(false)
    }
  }

 const toggleTheme = () => {
  if(!isLightMode){
    setCurrentPalette(customLightTheme)
  }
  else{
    setCurrentPalette(customDarkTheme)
  }
 }
  
const theme = createTheme(currentPalette);

  return (
  <Box>
    <ThemeProvider theme = {theme}>
   <TopMenu />
    <IconButton onClick={() => {toggleIcon(); toggleTheme();}}>
    {isLightMode ? <DarkMode /> : <LightMode />}
    </IconButton>
    </ThemeProvider>
  </Box>
    

  );
}
