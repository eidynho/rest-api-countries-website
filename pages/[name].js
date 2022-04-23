import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import DefaultErrorPage from 'next/error'
import Link from 'next/link'

import { Box, Button, Container, Grid, Typography, AppBar, Toolbar } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

import { lightTheme, darkTheme } from '../styles/themes/theme'


const Country = ({ country }) => {
  const [theme, setTheme] = useState(darkTheme)

  const toggleTheme = () => {
    setTheme(theme == lightTheme ? darkTheme : lightTheme)
  }

  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Carregando</p>
  }

  if(!country) {
    return <DefaultErrorPage statusCode={404} />
  }
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

      <Box sx={{ background: theme.palette.main.secondary, height: '94vh' }}>
        <Container maxWidth="xl" align='center'>
          <Link href="/" passHref>
            <Button
              elevation={3}
              sx={{
                height: '40px',
                width: '150px',
                background: theme.palette.main.primary, marginTop: 10,
                color: theme.palette.text.primary,
                boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.2)',
              }}
            >
              <KeyboardBackspaceIcon sx={{ marginRight: 1 }} />
              Back
            </Button>
          </Link>
          <Grid container sx={{ height:'80vh', display: 'flex', alignItems: 'center'}}>
            <Grid item xs={12} md={6}>
              <Image
                src={country[0].flags.svg}
                alt={country[0].name}
                width={560}
                height={350}
              />
            </Grid>
            <Grid item xs={12} md={3} sx={{ color: theme.palette.text.primary }}>
              <Box>
                <Typography component="h2" variant="h4" sx={{ fontWeight: '600', marginBottom: 3 }}>{country[0].name}</Typography>
                <Typography component="h3" variant="body2" sx={{ marginBottom: 1.2 }}><b>Native Name:</b> {country[0].nativeName}</Typography>
                <Typography component="h3" variant="body2" sx={{ marginBottom: 1.2 }}><b>Population:</b> {country[0].population.toLocaleString('pt-BR')}</Typography>
                <Typography component="h3" variant="body2" sx={{ marginBottom: 1.2 }}><b>Region:</b> {country[0].region}</Typography>
                <Typography component="h3" variant="body2" sx={{ marginBottom: 1.2 }}><b>Sub Region:</b> {country[0].subregion}</Typography>
                <Typography component="h3" variant="body2" sx={{ marginBottom: 1.2 }}><b>Capital:</b> {country[0].capital}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={2} sx={{ marginTop: 1, color: theme.palette.text.primary }}>
              <Box>
                <Typography component="h3" variant="body2" sx={{ marginBottom: 1.2 }}><b>Top Level Domain:</b> {country[0].topLevelDomain}</Typography>
                <Typography component="h3" variant="body2" sx={{ marginBottom: 1.2 }}><b>Currencies:</b> {country[0].currencies[0].name}</Typography>
                <Typography component="h3" variant="body2" sx={{ marginBottom: 1.2 }}><b>Language:</b> {country[0].languages[0].name}</Typography>
              </Box>
            </Grid>
        
          </Grid>
        </Container>
      </Box>
      
    </>

  )
}

export default Country

export const getStaticPaths = async () => {

  const response = await fetch(`https://restcountries.com/v2/all`)
  const data = await response.json()

  const paths = data.map(country => {
    return { params: { name: country.name } }
  })

  return {
    paths,
    fallback: true,
  }
}



export const getStaticProps = async (context) => {
  const { name } = context.params

  const response = await fetch(`https://restcountries.com/v2/name/${name}`)
  const data = await response.json()

  return {
    props: {
      country: data,
    }
  }

}