import {Box, Typography,TextField} from '@mui/material';
import React from 'react';
import { globalTheme} from '../Themes/Themes';
import { lightPalette } from '../Themes/CustomPalettes';

const ContactPage = React.forwardRef((props, ref) => {
    return(

        <Box ref={ref} sx={{display: 'flex', minHeight :'1000px',alignItems: 'center',flexDirection: 'column' }}>
            <Typography variant='h1'>
                Contact Me
            </Typography>
            <Box component = 'form' sx={{width: '40%',height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column',marginTop: globalTheme.spacing(4) }}>
                <TextField sx={{width: '100%',marginBottom : globalTheme.spacing(4) }}
                label = "Email"
                type='email'
                color = 'secondary'>
                 </TextField>
                 <TextField sx={{width: '100%', marginBottom : globalTheme.spacing(4)}}
                label = "Subject"
                color = 'secondary'>
                 </TextField>
                 <TextField sx={{width: '100%'}}
                multiline
                label = "Message"
                color = 'secondary'
                type = 'text'
                inputProps={{ style: { height: '70%',resize: 'vertical',} }}>
                   
                 </TextField>
            </Box>
            
        </Box>
     
    );
});


export default ContactPage;