import { useState, useEffect } from 'react'
import Link from 'next/link'
import slugify from 'slugify'

import {
  Container,
  Grid,
  Link as LinkMUI,
} from '@mui/material'


import Card from '../src/components/Card'
import TemplateDefault from '../src/templates/Default'

const Home = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <>
      <TemplateDefault />
        <Container  maxWidth="xl" sx={{ paddingTop: 6, paddingBottom: 4 }}>
          <Grid container spacing={4}>
              {
                countries.map( country => {
                  const name = slugify(country.name).toLowerCase()

                  return (
                      <Grid key={country.name} item xs={12} sm={6} md={3} sx={{ marginBottom: 9 }}>
                        <Link href={`${name}`} passHref>
                          <LinkMUI sx={{ textDecoration: 'none' }}>
                            <Card
                              image={country.flags.svg}
                              title={country.name}
                              population={country.population}
                              region={country.region}
                              capital={country.capital}
                            />
                          </LinkMUI>
                        </Link>
                      </Grid>
                  )
                })
              }
          </Grid>
        </Container>
    </>
  )
}

export default Home