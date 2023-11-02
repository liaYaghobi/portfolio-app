
import React from 'react';
import {IconButton} from '@mui/material';
import {DarkMode, LightMode} from '@mui/icons-material';

// ThemeToggle.js
interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}


export type{ ThemeToggleProps };

export default function ThemeToggle({ isDarkMode, onToggle }: ThemeToggleProps) {
  return (
    <IconButton onClick={onToggle} color="inherit">
      {isDarkMode ?  <LightMode />: <DarkMode />}
    </IconButton>
  );
}
