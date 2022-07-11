
import React from 'react'
import { useContext } from 'react';
import { myContext } from '../../CartContext/CartContext';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';



export default function Cart() {
  const { cart, removeItem } = useContext(myContext);


// function carroExiste(cart){
//    if ( cart.indexOf() === 0){
//     setAux(false)
//    }else{
//     setAux(true)
//    }
//  return aux
// }
// carroExiste(cart);
// console.log(cart.length)
  return (
    <>
    <div>
      { cart.length > 0 ?
               
<TableContainer component={Paper} sx={{ margin:3}}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Producto</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right"></TableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
                <Avatar alt="Remy Sharp" src={row.imagen} />
                
              </TableCell>
              <TableCell align="right">${row.price}</TableCell>
              <TableCell align="right">{row.quantity}u.</TableCell>
              <TableCell align="right">${row.totalPrice}</TableCell>
              <TableCell align="right">
                  <Button variant="outlined" color="error" href="#outlined-buttons" onClick={()=>removeItem(row.id)}>
                      <DeleteIcon/>
                  </Button>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
          </TableContainer> :
          <>
           <h3> Aun no tiene productos en el carrito de compras</h3>
        <Link style={{textDecoration:"none"}} to={'/'}> 
                        <Button   variant="contained" color="success"  >
                                VOLVER
                        </Button>    
                    </Link>        
            

              
          

                 

          
         
          
          
          
        </>
         

      } 
    </div>
    </>
  )
}
