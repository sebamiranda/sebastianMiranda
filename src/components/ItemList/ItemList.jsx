//ts-check
import { Grid } from '@mui/material';
import React from 'react';
import Item from '../Item/Item';
import  './ItemList.css'

export default function ItemList({productoList}) {




  return (
    <Grid container spacing={1} padding={2} justifyContent="center">  
        <Grid container item xs={12} spacing={1} >
        {
        productoList.map((item)=>{
           //console.log({item})
         return(<Item key= {item.id} id={item.id} title={item.title} price={item.price} pictureURL={item.pictureURL} stock={item.stock} description={item.description}  />)

        })
        
      }


        </Grid>
       
      
    </Grid>
      
  )
}
