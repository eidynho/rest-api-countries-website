import Link from 'next/link'
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'

import LightModeIcon from '@mui/icons-material/LightMode';

const Header = ({ theme, toggleTheme }) => {
  return (
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
  )
}

export default Header