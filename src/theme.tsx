'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import { Color, colors } from '@mui/material';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette:{
    primary:{
      main:colors.teal[600],
    }
  },
  
});

export default theme;