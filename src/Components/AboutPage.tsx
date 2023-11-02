
import {Box, Typography,createTheme,ThemeProvider} from '@mui/material';
import { globalTheme } from '../Themes/Themes';
import HorizontalStackContainer from './HorizontalStackContainer';
import React from 'react';

const customTheme = createTheme({
  typography: {
    fontFamily: 'Helvetica',
  },
  components: {
    // Define styles for specific components
    MuiTypography: {
      // Define styles for the Typography component
      styleOverrides: {
        // Add a class to the Typography component
        root: {
          '&.type1': {
            fontSize: 40,
            fontWeight: 730,  
          },
          '&.type2': {
            fontSize: 40,
            fontWeight: 730,
            color: 'blue',
          },
        },
      },
    },
  },
});

const AboutPage = React.forwardRef((props, ref) => {
  return (
    <ThemeProvider theme={customTheme}>
      <HorizontalStackContainer>
        <Box ref={ref} sx={{ flex: '0 0 50%', flexGrow: 1, margin: globalTheme.spacing(8) }}>
          {/* Your content here */}
          <Typography className="type1">
            THIS IS THE
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography className="type1">ABOUT</Typography>
            <Typography className="type2">PAGE</Typography>
          </Box>
          <Typography>
            A full-stack developer who loves all things tech. I bring passion for creating cool stuff with code. Let's make
            things happen in the digital realm!
          </Typography>
        </Box>
        <Box>
          <img src={process.env.PUBLIC_URL + '/images/headshot.png'} alt="Description of the image" />
        </Box>
      </HorizontalStackContainer>
    </ThemeProvider>
  );
});

export default AboutPage;