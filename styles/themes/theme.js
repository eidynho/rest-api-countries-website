import { createTheme } from '@mui/material/styles'

export const lightTheme = createTheme({
  palette: {
    main: {
      primary: 'hsl(0, 0%, 100%)',
      secondary: 'hsl(0, 0%, 98%)',
    },
  
    text: {
      primary: 'hsl(200, 15%, 8%)',
    },
  },
  
  typography: {
    fontFamily: 'Nunito-sans, sans-serif',
  }
})

export const darkTheme = createTheme({
  palette: {
    main: {
      primary: 'hsl(209, 23%, 22%)',
      secondary: 'hsl(207, 26%, 17%)',
    },
  
    text: {
      primary: 'hsl(0, 0%, 100%)',
    },
  },

  typography: {
    fontFamily: 'Nunito-sans, sans-serif',
  }
})