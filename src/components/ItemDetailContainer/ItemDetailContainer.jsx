import React, {useEffect, useState}from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { doc, getDoc, getFirestore } from 'firebase/firestore'


export default function ItemDetailContainer() {
    const [productoList, setProductoList] = useState({});
    const [loading,setLoading] = useState(true);
    let {idItem} =useParams();

useEffect(() => {

  // let productos = [
  //   {id: "1",title: "Martillo", category:"Herramientas", price: 300, stock:10, pictureURL:"https://www.mndelgolfo.com/blog/wp-content/uploads/2017/01/martillo-para-mecanico-640x360.jpg", description:"Martillo de aleacion ,super resisitente." },
  //   {id: "2",title: "Pinturas", category:"Pinturas", price: 400, stock:10, pictureURL:"https://arcencohogar.vtexassets.com/arquivos/ids/281838-800-800?v=637651631531570000&width=800&height=800&aspect=true", description:"Pintura al Aceite Resitente para lavado con agua" },
  //   {id: "3",title: "Taladro", category:"Accesorios", price: 30, stock:10, pictureURL:"https://www.mndelgolfo.com/blog/wp-content/uploads/2016/11/Rotomartillo-Pretul-12-500W-768x768.jpg",description:"Taladro con sistema percutor.Posee 100 rpm" },    
  // ];

  // new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(productos)
      
  //   },2000);
  // }).then((res)=>{
  //   let aux = res.find((elemento) => elemento.id == idItem)
  // //  console.log(aux )
  // setProductoList(aux)
  // //console.log(productoList)
  // setLoading(false)
  // })

  const db = getFirestore();

  const docRef = doc(db,'productos',idItem);



 getDoc(docRef).then((item)=>{

    const aux = {...item.data(), id:item.id};
    setProductoList(aux);
    setLoading(false)})

}, [idItem])



  return (
    //console.log(productoList)
    <>
    {loading ?
      <Box sx={{ display: 'flex' }}>
      <CircularProgress  color="inherit" />
    </Box> :    

   <ItemDetail productoList={productoList} />
   }
    </>
  )
}
