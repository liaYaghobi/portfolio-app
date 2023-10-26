// customThemeOptions.d.ts

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    lightPalette?: PaletteOptions; // Custom light palette options
    darkPalette?: PaletteOptions; // Custom dark palette options
  }
}
