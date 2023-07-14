import { common, green, grey, orange } from '@mui/material/colors';
import { ThemeOptions } from '@mui/material';

export const APP_PRIMARY_COLOR = orange[900];

export const LIGHT_APP_TEXT_COLOR = common.white;
export const DARK_APP_TEXT_COLOR = common.black;

export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: APP_PRIMARY_COLOR,
      dark: orange[700],
      light: orange[300],
      contrastText: DARK_APP_TEXT_COLOR,
    },
    secondary: {
      main: '#d32f2f',
      light: '#eb4242',
      dark: '#941212',
      contrastText: DARK_APP_TEXT_COLOR,
    },
    success: {
      main: '#2196f3',
      contrastText: DARK_APP_TEXT_COLOR,
    },
  },
};

export const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: APP_PRIMARY_COLOR,
      dark: orange[700],
      light: orange[300],
      contrastText: LIGHT_APP_TEXT_COLOR,
    },
    secondary: {
      main: '#d32f2f',
      light: '#eb4242',
      dark: '#941212',
      contrastText: LIGHT_APP_TEXT_COLOR,
    },
    success: {
      main: '#2196f3',
      contrastText: LIGHT_APP_TEXT_COLOR,
    },
  },
};

export const themes: Record<'dark' | 'light', ThemeOptions> = {
  light: lightTheme,
  dark: darkTheme,
};
