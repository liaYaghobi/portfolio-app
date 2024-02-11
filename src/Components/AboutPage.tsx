
import {Box, Typography,createTheme,ThemeProvider} from '@mui/material';
import { globalTheme } from '../Themes/Themes';
import HorizontalStackContainer from './HorizontalStackContainer';
import React from 'react';



const AboutPage = React.forwardRef((props, ref) => {
  return (
    <Box sx={{minHeight: '1000px'}}>
      <HorizontalStackContainer>
        <Box ref={ref} sx={{ flex: '0 0 50%', flexGrow: 1 , margin: globalTheme.spacing(8)}}>
        <img src={process.env.PUBLIC_URL + '/images/mee2.jpg'}  alt="A girl standing on the brooklyn bridge" />
        </Box>
        <Box>
          <Typography variant = 'h2'>
            About
          </Typography>
          <Typography sx={{ flex: '0 0 50%', flexGrow: 1}}>
          Based in Los Angeles, I'm a full stack developer whose coding journey started in computer science classes. 
          While I have a knack for full stack development, what keeps me hooked is the thrill of learning. 
          Every project is an adventure, and I love the collaborative dance of coding—it's about turning ideas 
          into reality and making friends along the way. When I'm not coding, you can find me tending to my plants, 
          enjoying the outdoors (I love to hike, yes I know, crazy), and relishing the company of friends and family.

          </Typography>
         
        </Box>
      </HorizontalStackContainer>
      </Box>
  );
});

export default AboutPage;