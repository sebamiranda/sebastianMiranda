import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



export default function ItemDetail({productoList}) {

  function onAdd(auxInitial) {
  
    alert("Usted agrego "+ auxInitial +  " productos al carrito de compras.")
  
}


  return (

 <div>
    <Card sx={{ maxWidth: 700, margin:1 }}>
          <CardMedia
            component="img"
            height="200"
            image={productoList.pictureURL}
            alt=""
          />

          <CardContent>
                <Typography variant="h3" gutterBottom component="div">
                    {productoList.title}
                </Typography>  
                <Typography variant="subtitle2" gutterBottom component="div">
                  {productoList.description}
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                    Precio: $ {productoList.price}
                </Typography>  
          </CardContent>

        <CardActions >      
                <Grid container justifyContent="center">

                <ItemCount stock ={productoList.stock} initial={1} onAdd={onAdd}/> 
                </Grid>
                     
              
            
          
        </CardActions>
      </Card>

  </div>
  )
}
