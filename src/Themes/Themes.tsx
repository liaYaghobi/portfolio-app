import {createTheme} from '@mui/material/styles';
import { lightPalette, darkPalette } from './CustomPalettes';

export const customLightTheme = createTheme({
    palette: lightPalette,
    typography: {
        button: {
            textTransform: 'none', // Set textTransform to 'none' for buttons
            
          },
      },
  });
  
  export const customDarkTheme = createTheme({
    palette: darkPalette,
    typography: {
        button: {
            textTransform: 'none', // Set textTransform to 'none' for buttons
            color: '#d32f2f',
          
          },
      },
  });
  