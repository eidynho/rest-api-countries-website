

import { GlobalStyles } from '@mui/material'

const global = () => {
  <GlobalStyles 
    styles={{
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },

      body: {
        fontFamily: 'Nunito Sans, sans-serif',

      },

      a: {
        textDecoration: 'none',
      }
    }}
  />
}

export default global