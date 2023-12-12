import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { green, orange } from '@mui/material/colors';

export const colorTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
        main: '#000'
    }
  },
});


