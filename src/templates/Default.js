import { useState } from 'react'
import { Box, ThemeProvider } from '@mui/material'

import lightTheme from '../../styles/themes/light'
import darkTheme from '../../styles/themes/dark'
import Header from "../components/Header";


const Default = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme)

  const toggleTheme = () => {
    setTheme(theme == lightTheme ? darkTheme : lightTheme)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Box sx={{ background: darkTheme.palette.primary.main}}>
          {children}
        </Box>
      </ThemeProvider>
    </>

  )
}

export default Default