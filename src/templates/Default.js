import { useState } from 'react'
import { ThemeProvider } from '@mui/material'

import lightTheme from '../../styles/themes/light'
import darkTheme from '../../styles/themes/dark'


import Header from "../components/Header";

const Default = () => {
  const [theme, setTheme] = useState(darkTheme)

  const toggleTheme = () => {
    setTheme(theme == lightTheme ? darkTheme : lightTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Header theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>

  )
}

export default Default