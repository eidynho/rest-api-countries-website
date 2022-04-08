import { useRouter } from 'next/router'
import Image from 'next/image'
import DefaultErrorPage from 'next/error'
import Link from 'next/link'

import { Box, Button, Container, Grid, Typography } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

import TemplateDefault from '../src/templates/Default'
import dark from '../styles/themes/dark'

const Country = ({ country }) => {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Carregando</p>
  }

  if(!country) {
    return <DefaultErrorPage statusCode={404} />
  }
  return (
    <>
      <TemplateDefault />
      <Container maxWidth="xl" align='center'>
        <Link href="/" passHref>
          <Button sx={{ height: '40px', width: '150px', background: dark.palette.primary.main, color: dark.palette.text.primary, marginTop: 10 }} elevation={3}>
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

          <Grid item xs={12} md={3}>
            <Box>
              <Typography component="h2" variant="h4" sx={{ fontWeight: '600', marginBottom: 3 }}>{country[0].name}</Typography>


              <Typography component="h3" variant="body2" sx={{ marginBottom: 0.5 }}><b>Native Name:</b> {country[0].nativeName}</Typography>

              <Typography component="h3" variant="body2" sx={{ marginBottom: 0.5 }}><b>Population:</b> {country[0].population.toLocaleString('pt-BR')}</Typography>

              <Typography component="h3" variant="body2" sx={{ marginBottom: 0.5 }}><b>Region:</b> {country[0].region}</Typography>

              <Typography component="h3" variant="body2" sx={{ marginBottom: 0.5 }}><b>Sub Region:</b> {country[0].subregion}</Typography>

              <Typography component="h3" variant="body2" sx={{ marginBottom: 0.5 }}><b>Capital:</b> {country[0].capital}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={2} sx={{ marginTop: 1}}>
            <Box>
              <Typography component="h3" variant="body2" sx={{ marginBottom: 0.5 }}><b>Top Level Domain:</b> {country[0].topLevelDomain}</Typography>

              <Typography component="h3" variant="body2" sx={{ marginBottom: 0.5 }}><b>Currencies:</b> {country[0].currencies[0].name}</Typography>

              <Typography component="h3" variant="body2" sx={{ marginBottom: 0.5 }}><b>Language:</b> {country[0].languages[0].name}</Typography>
            </Box>
          </Grid>
          

        </Grid>
      </Container>
      
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