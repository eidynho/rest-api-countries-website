
import { createTheme } from '@mui/material/styles'

const dark = createTheme({
  palette: {
    common: {
      black: 'hsl(207, 26%, 17%)',
      white: 'hsl(0, 0%, 100%)',
    },

    primary: {
      main: 'hsl(209, 23%, 22%)',
    },

    background: {
      default: 'hsl(207, 26%, 17%)',
    },
  
    text: {
      primary: 'hsl(0, 0%, 100%)',
    },
  },

  typography: {
    fontFamily: 'Nunito-sans, sans-serif',
  },

})

export default dark