import { Button, Grid } from '@mui/material';

import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { myContext } from '../../CartContext/CartContext';






export default function ItemDetail({productoList}) {

  const { addItem } = useContext(myContext); 

  const [initial,setInitial]= useState();

  function onAdd(auxInitial) {
    //setInitial(auxInitial);
    console.log('auxinitial on add'+ auxInitial)
    addItem(productoList,auxInitial);
    alert("Usted agrego "+ auxInitial +" "+ productoList.title + " al carrito de compras.")
   
    console.log('setinitial on add'+initial)
  
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
                <Grid container justifyContent="center" >
                  
                 
                    <ItemCount  stock ={productoList.stock} initial={1} onAdd={onAdd}/>
                    
                     <Link style={{textDecoration:"none", color:"success"}} to={'/cart'}> 
                        <Button   variant="outlined"  >
                                  FINALIZAR COMPRA
                        </Button>    
                    </Link>                 
                  
                </Grid>
                
        </CardActions>
      </Card>

  </div>
  )
}
