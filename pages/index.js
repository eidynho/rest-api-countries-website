import { useState, useEffect } from 'react'
import Link from 'next/link'
import slugify from 'slugify'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import {
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Link as LinkMUI,
} from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'

import { lightTheme, darkTheme } from '../styles/themes/theme'

import Card from '../src/components/Card'

const Home = ({ countries }) => {
  const [theme, setTheme] = useState(darkTheme)

  const toggleTheme = () => {
    setTheme(theme == lightTheme ? darkTheme : lightTheme)
  }
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {

  }, [])

  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" elevation={0} sx={{ backgroundColor: theme.palette.main.primary }}>
            <Container maxWidth="xl">
              <Toolbar>
              <Link href="/" passHref>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer', color: theme.palette.text.primary }}>Where in the world?</Typography>
              </Link>
              <LightModeIcon onClick={toggleTheme} sx={{ color: theme.palette.text.primary }} />
              </Toolbar>
            </Container>
          </AppBar>
        </Box>

      <Box sx={{background: theme.palette.main.secondary}}>
        <Container maxWidth="xl" sx={{ paddingTop: 6, paddingBottom: 4 }}>
          <Grid container spacing={4}>
              {
                countries.map( country => {
                  const name = slugify(country.name, {
                    replacement: '%20'
                  }).toLowerCase()

                  return (
                      <Grid key={country.name} item xs={12} sm={6} md={3} sx={{ marginBottom: 9 }}>
                        <Link href={`/${name}`} passHref>
                          <LinkMUI sx={{ textDecoration: 'none' }}>
                            <Card
                              image={country.flags.svg}
                              title={country.name}
                              population={country.population}
                              region={country.region}
                              capital={country.capital}
                              theme={theme}
                            />
                          </LinkMUI>
                        </Link>
                      </Grid>
                  )
                })
              }
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  const response = await fetch('https://restcountries.com/v2/all')
  const data = await response.json()
  
  return {
    props: {
      countries: data,
    }
  }
}