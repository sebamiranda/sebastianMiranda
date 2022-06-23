//ts-check
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';


import Box from '@mui/material/Box';

import { Grid } from '@mui/material';

export default function Item({id, price ,title, pictureURL}) {

  function onAdd() {
  
      alert("Usted agrego "+ {id} + " productos al carrito de compras.")
    
  }
  return (
    <div>
     
     <Card sx={{ maxWidth: 500, margin:1 }}>
      <CardMedia
        component="img"
        height="100"
        image={pictureURL}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         ${price}
        </Typography>
        
      </CardContent>
      <CardActions>
      
      <Grid container>
          <Grid item xs={12}>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
          
          
             
              </Box>
          </Grid>
          <Grid item xs={12} >    
          <Box sx={{ '& > :not(style)': { m: 1 } }}> 
            <Button variant="outlined" >DESCRIPCION</Button>
            <ItemCount stock ={15} initial={1} onAdd={onAdd}/> 
            </Box>
          </Grid>
      </Grid>
      </CardActions>
    </Card>
       </div>
  )
}
