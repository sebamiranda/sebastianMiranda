//ts-check
import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';

export default function ItemListContainer({greeting}) {

  const [productoList, setProductoList] = useState([])

useEffect(() => {

  let productos = [
    {id: "1",title: "Martillo", price: 300, pictureURL:"https://www.mndelgolfo.com/blog/wp-content/uploads/2017/01/martillo-para-mecanico-640x360.jpg" },
    {id: "2",title: "Pinza", price: 400, pictureURL:"https://www.mndelgolfo.com/blog/wp-content/uploads/2018/09/PINZA-ELECTRICISTA-MINIATURA-COMFORT-GRIP-TRUPER-4-PUL.jpg" },
    {id: "3",title: "Taladro", price: 30, pictureURL:"https://www.mndelgolfo.com/blog/wp-content/uploads/2016/11/Rotomartillo-Pretul-12-500W-768x768.jpg" },
  ];

  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos)
      
    },2000);
  }).then((res)=>{
  setProductoList(res)

  })

  
}, [])





  return (
    <>
    
    <span>{greeting}</span>
    <ItemList productoList={productoList} />
    
    </>
  )
}
