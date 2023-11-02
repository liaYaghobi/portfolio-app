import { AppBar, Box, Toolbar, Button } from '@mui/material';
import ThemeToggle from './ThemeToggle';
import { ThemeToggleProps } from './ThemeToggle';

export default function TopMenu({ isDarkMode, onToggle, onScrollToHome, onScrollToAbout}: ThemeToggleProps & { onScrollToHome: () => void, onScrollToAbout: () => void}) {
  return (
    <Box sx={{ flexGrow: 1, paddingBottom: '4rem'}}>
      <AppBar position="fixed" elevation={0}>
        <Toolbar style={{ justifyContent: 'flex-end' }}>
          <Button color="inherit" onClick={onScrollToHome}>Home</Button>
          <Button color="inherit" onClick={onScrollToAbout}>About</Button>
          <Button color="inherit" >Education</Button>
          <Button color="inherit"> Skills</Button>
          <Button color="inherit" >Experience</Button>
          <Button color="inherit" >Contact</Button>
          <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggle} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
