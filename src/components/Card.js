import {
  Card as CardMUI,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material'



const Card = ({ image, title, population, region, capital}) => {

  return (
    <CardMUI sx={{ 
      height: '109%',
      width: '90%',
      margin: 'auto',
      background: 'hsl(209, 23%, 22%)',
      color: 'hsl(0, 0%, 100%)',
      }}
    >

      <CardMedia 
        image={image}
        title={title}
        sx={{
          paddingTop: '56%'
        }}
      />

      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>
          Population:{population}
        </Typography>
        <Typography>
          Region:{region}
        </Typography>
        <Typography>
          Capital:{capital}
        </Typography>
      </CardContent>
    </CardMUI>
  )
}

export default Card