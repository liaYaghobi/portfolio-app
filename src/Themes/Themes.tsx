import {createTheme} from '@mui/material/styles';
import { lightPalette, darkPalette } from './CustomPalettes';

export const globalTheme = createTheme({
  spacing: 8,
});

export const customLightTheme = createTheme({
    palette: lightPalette,
    typography: {
        fontFamily: 'Helvetica',
        button: {
            textTransform: 'none', // Set textTransform to 'none' for buttons
          },
          body1: {
            color: lightPalette.primary?.contrastText, // Set text color for body text in dark theme
          },
      },
     
    });
  
  export const customDarkTheme = createTheme({
    palette: darkPalette,
    typography: {
        button: {
            textTransform: 'none', // Set textTransform to 'none' for buttons  
          },
          body1: {
            color: darkPalette.primary?.contrastText, // Set text color for body text in dark theme
          },
      },
  });
  