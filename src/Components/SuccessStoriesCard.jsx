import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import image3 from '../Images/3.jpg'

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 500}} style={{width:'250px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={image3}
          alt="Spiral stair case"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Spiral stair case
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Lorem ipsum dolor 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" variant="contained" style={{textTransform:"capitalize"}}>
          More...
        </Button>
      </CardActions>
    </Card>
  );
}
