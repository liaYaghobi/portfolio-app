
import {AppBar, Box, Toolbar, IconButton, Typography, Button} from '@mui/material';
import { customLightTheme, customDarkTheme } from '../Themes/Themes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {DarkMode, LightMode} from '@mui/icons-material';
import { useState } from 'react';

export default function TopMenu() {
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
    <Box sx={{ flexGrow: 1 }}>
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Education</Button>
            <Button color="inherit">Skills</Button>
            <Button color="inherit">Experience</Button>
            <Button color="inherit">Contact</Button>
            <IconButton onClick={() => {toggleIcon(); toggleTheme();}}>
            {isLightMode ? <DarkMode /> : <LightMode />}
            </IconButton>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
  );
}
