import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';

export default function ItemCount({stock, initial, onAdd}) {

const [auxInitial, setAuxInitial]= useState(initial);

function restar(){
    if(auxInitial >= 1){
        setAuxInitial(auxInitial - 1);
    }
}
function sumar(){
    if(auxInitial < stock){
        setAuxInitial(auxInitial + 1);
    }
}



  return (
    <div>
    <Card sx={{ maxWidth: 200 }}>
      {/* <CardMedia
        component="img"
        height="50"
        image=""
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Producto
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Descripcion
        </Typography>
      </CardContent>
      <CardActions> */}
      
      <Grid container>
          <Grid item xs={12}>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <Fab color="primary" size='small' onClick={()=>restar()}>
                <HorizontalRuleIcon />
              </Fab>
              <Fab color="string" size='small'>
              {auxInitial}
              </Fab>
              <Fab color="primary" size='small' onClick={()=>sumar()}>
                <AddIcon />
              </Fab>
              </Box>
          </Grid>
          <Grid item xs={12} >    
          <Box sx={{ '& > :not(style)': { m: 1 } }}> 
            <Button variant="outlined" onClick={()=>onAdd(auxInitial)}>AGREGAR</Button>
            </Box>
          </Grid>
      </Grid>
      {/* </CardActions> */}
    </Card>
    </div>
  )
}
