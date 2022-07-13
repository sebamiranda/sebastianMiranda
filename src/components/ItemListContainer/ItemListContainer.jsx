
import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


export default function ItemListContainer({greeting}) {

  const [productoList, setProductoList] = useState([]);
  const [loading,setLoading] = useState(true);
  let { idCategory } = useParams();
  console.log(idCategory)

useEffect(() => {

  // let productos = [
  //   {id: "1",title: "Martillo", category:"Herramientas", price: 300, stock:10, pictureURL:"https://www.mndelgolfo.com/blog/wp-content/uploads/2017/01/martillo-para-mecanico-640x360.jpg", description:"Martillo de aleacion ,super resisitente." },
  //   {id: "2",title: "Pinturas", category:"Pinturas", price: 400, stock:10, pictureURL:"https://arcencohogar.vtexassets.com/arquivos/ids/281838-800-800?v=637651631531570000&width=800&height=800&aspect=true", description:"Pintura al Aceite Resitente para lavado con agua" },
  //   {id: "3",title: "Taladro", category:"Accesorios", price: 30, stock:10, pictureURL:"https://www.mndelgolfo.com/blog/wp-content/uploads/2016/11/Rotomartillo-Pretul-12-500W-768x768.jpg",description:"Taladro con sistema percutor.Posee 100 rpm" },    
  // ];

//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(productos)
      
//     },2000);
//   }).then((res)=>{
//    // let idCategory ="Accesorios"
//    //console.log(idCategory)
//     if(!idCategory){
//       setProductoList(res)
      
//     }else{
//       let productoListFiltrado = res.filter((elemento) => elemento.category == idCategory)
//       console.log(productoListFiltrado)
//       setProductoList(productoListFiltrado)
     
//     }
//     setLoading(false)

//   })

  
// }, [idCategory])

const db = getFirestore();
let collectionRef =undefined;
if (!idCategory){
 collectionRef = collection(db,'productos');
}else{
   collectionRef = query(collection(db, 'productos'), where ('category', '==', idCategory));
   console.log('entre else')
}


getDocs(collectionRef).then((res)=>{

    console.log('entre')
    const auxArray = res.docs.map((item)=> ({...item.data(), id:item.id}));
    console.log(auxArray)
    setProductoList(auxArray);

    console.log('categoria',idCategory)
    
   
   
  
  setLoading(false)

})


}, [idCategory])



  return (
    
    <Grid container justifyContent="center">
    {/* <span>{greeting}</span> */}
    
    {loading ?
          <Box sx={{ display: 'flex' }}>
              < CircularProgress  color="inherit" />
          </Box> :
          <ItemList  productoList={productoList} />        
    }
</Grid>
  )
}
