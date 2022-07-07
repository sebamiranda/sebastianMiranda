//@ts-check
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CardActionArea } from '@mui/material';


import Box from '@mui/material/Box';

import { Grid } from '@mui/material';

export default function Item({id, price , stock,  title, pictureURL,description}) {

  // function onAdd(auxInitial) {
  //     console.log( "auxinitial" + auxInitial)
  //     alert("Usted agrego "+  auxInitial  + " productos al carrito de compras.")
    
  // }
  return (
    <div>
     
     <Card sx={{ maxWidth: 500, margin:1,}}>
     <Link style={{textDecoration:"none", color:"black"}} to={'/item/'+id}>
          <CardActionArea>
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
            </CardActionArea>
        </Link>
      <CardActions>      
        <Grid container>          
            <Grid item xs={12} >    
                <Box sx={{ '& > :not(style)': { m: 1 } }}> 
                  <Button variant="outlined" >
                      <Link style={{textDecoration:"none", color:"primary"}} to={'/item/'+id}>
                              DETALLES
                      </Link>
                  </Button>    
                  {/* <ItemCount stock ={stock} initial={1} onAdd={onAdd}/>  */}
              </Box>
            </Grid>
               
         </Grid>
      </CardActions>
    
    </Card>
       </div>
  )
}
