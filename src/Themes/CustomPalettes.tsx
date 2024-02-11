import { SimplePaletteColorOptions } from '@material-ui/core';
import { PaletteOptions} from '@mui/material/styles';

interface DefaultPaletteOptions extends PaletteOptions {
  primary?: SimplePaletteColorOptions;
  secondary? :SimplePaletteColorOptions;
}

export const lightPalette: DefaultPaletteOptions = {
    background: {
      default: '#fafafa', //Sets Light Mode Background Color
   },
    primary: {
      main: '#fafafa', 
      contrastText: '#212121',
    },  
    secondary: {
      main: '#212121', 
    },  
  };
  
export const darkPalette: DefaultPaletteOptions = {
    background: {
       default: '#212121', //Sets Dark Mode Background Color
    },
    primary: {
      main: '#212121', 
      contrastText: '#fafafa',
    },
    secondary: {
      main: '#fafafa', 
     
    },
  };

