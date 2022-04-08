import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

import darkTheme from '../styles/themes/dark'

function MyApp({ Component, pageProps }) {


  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  )
}

export default MyApp
