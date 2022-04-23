import CssBaseline from '@mui/material/CssBaseline'

function MyApp({ Component, pageProps }) {


  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
