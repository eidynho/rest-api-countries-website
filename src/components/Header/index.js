
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'

import { 
  HeaderBox,
 } from './styles'

const Header = ({theme, toggleTheme}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={2} sx={{ backgroundColor: theme.colors.primary }}>
        <Container maxWidth="xl">
          <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer', color: theme.colors.text }}>Where in the world?</Typography>
          <Button
            onClick={toggleTheme}
            sx={{
              color: 'white',
              '&:hover': {
                background: 'transparent',
              },
            }}
          >
            <DarkModeOutlinedIcon />
            <Typography>Dark Mode</Typography>
          </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header