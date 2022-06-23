//ts-check
import React from 'react';
import Item from '../Item/Item';
import  './ItemList.css'

export default function ItemList({productoList}) {




  return (
    <div className='item_container' key={ productoList.id}>
        
        {
        productoList.map((item)=>{
           //console.log({item})
         return(<Item id={item.id} title={item.title} price={item.price} pictureURL={item.pictureURL}/>)

        })
        
        }

    </div>
  )
}
