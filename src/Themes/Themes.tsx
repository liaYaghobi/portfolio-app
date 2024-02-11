import {createTheme} from '@mui/material/styles';
import { lightPalette, darkPalette } from './CustomPalettes';

export const globalTheme = createTheme({
  spacing: 8,
});

const buttonStyle1 = {
  textTransform: 'none',
  backgroundColor: '#4CAF50',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#45a049',
  },
};


export const customLightTheme = createTheme({
    palette: lightPalette,
    components:{
      MuiButton:{
        styleOverrides:{
          root: ({ ownerState }) => ({
            ...(ownerState.variant === 'contained' &&
              {
                backgroundColor: '#212121',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#212121', // Set the same color as normal state to remove hover effect
                },
               
              }),
              ...(ownerState.variant === 'outlined' &&
              {
                borderColor: '#212121',
                color: '#212121',
                '&:hover': {
                  borderColor: '#212121', // Set the same color as normal state to remove hover effect
                },
               
              }),
          }),
        }
      }
    },
    
    typography: {
        fontFamily: 'Helvetica',
        button: {
            textTransform: 'none', // Set textTransform to 'none' for buttons
          },
          body1: {
            color: lightPalette.primary?.contrastText, // Set text color for body text in dark theme
          },
          h1:{
            fontSize: 40,
            fontWeight: 730,  
          },
          h2:{
            fontSize: 30,
            fontWeight: 730, 
          },
          h3:{
            fontSize: 16,
            fontWeight: 730, 
          },
          
      },

    
    });
  
  export const customDarkTheme = createTheme({
    palette: darkPalette,
    components:{
      MuiTextField : {
        styleOverrides: {
          root: {
            '& .MuiInputBase-input': {
              color: '#fafafa', // Change this to the desired text color
            },
            
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#fafafa', // Change this to the desired text color
            },
          }
        }
      },
      MuiButton:{
        styleOverrides:{
          root: ({ ownerState }) => ({
            ...(ownerState.variant === 'contained' &&
              {
                backgroundColor: 'white',
                color: '#212121',
                '&:hover': {
                  backgroundColor: 'white', // Set the same color as normal state to remove hover effect
                },
               
              }),
              ...(ownerState.variant === 'outlined' &&
              {
                backgroundColor: '#212121',
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white', // Set the same color as normal state to remove hover effect
                },
               
               
              }),
          }),
        }
      }
    },
    typography: {
        button: {
            textTransform: 'none', // Set textTransform to 'none' for buttons  
          },
          body1: {
            color: darkPalette.primary?.contrastText, // Set text color for body text in dark theme
          },
          h1:{
            fontSize: 40,
            fontWeight: 730,  
          },
          h2:{
            fontSize: 30,
            fontWeight: 730,
          }
      },
  });
  