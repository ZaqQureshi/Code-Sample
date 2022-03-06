import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#249FFB',
    },
    secondary: {
      main: '#E8219C',
    },
  },

  typography: {
    fontFamily: 'Quicksand, sans-serrif',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
