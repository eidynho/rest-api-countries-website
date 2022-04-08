import Link from 'next/link'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'

import dark from '../../../styles/themes/dark'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: dark.palette.primary.main }}>
        <Container maxWidth="xl">
          <Toolbar>
          <Link href="/" passHref>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer', color: dark.palette.secondary }}>Where in the world?</Typography>
          </Link>  
          
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header