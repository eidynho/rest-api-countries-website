import {
  Card as CardMUI,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material'



const Card = ({ image, title, population, region, capital, theme }) => {

  return (
    <CardMUI sx={{ 
      height: '109%',
      width: '90%',
      margin: 'auto',
      background: theme.palette.main.primary,
      color: theme.palette.text.primary,
      }}
      elevation={0}
    >

      <CardMedia 
        image={image}
        title={title}
        sx={{
          paddingTop: '56%'
        }}
      />

      <CardContent>
        <Typography component="h2" variant="h5" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
          {title}
        </Typography>

        <Typography component="h3" variant="body2" sx={{ marginBottom: 0.5 }}>
          <b>Population:</b> {population.toLocaleString('pt-BR')}
        </Typography>
        <Typography component="h3" variant="body2" sx={{ marginBottom: 0.5 }}>
          <b>Region:</b> {region}
        </Typography>
        <Typography component="h3" variant="body2" >
          <b>Capital:</b> {capital}
        </Typography>
      </CardContent>
    </CardMUI>
  )
}

export default Card