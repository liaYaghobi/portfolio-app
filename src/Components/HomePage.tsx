
import {Box, Typography,createTheme,ThemeProvider,Button} from '@mui/material';
import { globalTheme} from '../Themes/Themes';
import { lightPalette } from '../Themes/CustomPalettes';

import HorizontalStackContainer from './HorizontalStackContainer';
import React from 'react';


const HomePage = () => {
  return (
    <Box sx={{minHeight : '1000px'}}>
      <HorizontalStackContainer>
    <Box sx={{  flex: '0 0 50%', flexGrow: 1, margin: globalTheme.spacing(8) }}>
    <Typography variant='h1'>
        Hey There!
    </Typography>
    <Box sx={{ display: 'flex', gap: 1}}>
    <Typography variant='h1'>
        I'm 
    </Typography>
    <Typography variant='h1'>
        Lia
    </Typography>
    </Box>
    <Typography >
    A full-stack developer who  loves all things tech. I bring passion for creating cool stuff with code. 
    Let's make things happen in the digital realm!
    </Typography>
    <Box sx={{display: 'flex', alignItems:'start'}}>
    <Button variant="contained" style={{  marginTop:'10%', marginRight: '5%'}}>
      Contact
    </Button>
    <Button variant="outlined" style={{  marginTop:'10%'}}>
      Resume
    </Button>

    </Box>
    </Box>
    <Box>
    </Box>
  
    </HorizontalStackContainer>
    </Box>
  
  );
};

export default HomePage;