
import {AppBar, Box, Toolbar, Button} from '@mui/material';


export default function TopMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: 'flex-end' }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Education</Button>
            <Button color="inherit">Skills</Button>
            <Button color="inherit">Experience</Button>
            <Button color="inherit">Contact</Button> 
        </Toolbar>
      </AppBar>
    </Box>
  );
}
