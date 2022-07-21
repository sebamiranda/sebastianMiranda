
import { Button } from '@mui/material';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../CartContext/CartContext';
import '../components/Cart/Cart.css'

export default function CheckOut() {

    const { cart,totalCart, clear } = useContext(myContext);
    const [nombre, setNombre] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [idCompra, setidCompra] = useState('')


function handleClickComprar(){
    const pedido = {
        buyer :{nombre, tel, email},
        items:[ JSON.stringify(cart)   ],
        
    };
    if(!nombre || !tel || !email) return  

const db = getFirestore();
const collectionRef = collection(db,'pedidos');
addDoc(collectionRef,pedido).then(({ id }) => setidCompra(id) );



}

function seguirComprando(){
  return clear();
}

  return (
    <div>
     
      { idCompra ? 
      <div>
      <p> ID de compra : {idCompra}</p> 
      <p>Nombre: {nombre}</p>
      <p>Telefono: {tel}</p>
      <p>Email: {email}</p>
      <p>Monto total : {totalCart(cart)}</p>
      <h2>GRACIAS POR SU COMPRA</h2>
      <Link style={{textDecoration:"none"}} to={'/'}> 
                        <Button  onClick={seguirComprando} variant="contained" color="success"  >
                                SEGUIR COMPRANDO
                        </Button>    
                    </Link>      
      </div>:
    
        <div>
     
        <h1> Complete con sus datos para finalizar el pedido:</h1>
       <input onChange={(e) => setNombre(e.target.value)} type={'text'} placeholder={'Ingrese Nombre'}></input>
       <input onChange={(e) => setTel(e.target.value)} type={'tel'} placeholder={'Ingrese Telefono'}></input>
       <input onChange={(e) => setEmail(e.target.value)} type={'email'} placeholder={'Ingrese Email'}></input>
       <br/>
       <br/>
       <button onClick={handleClickComprar}>COMPRAR</button>
       </div>
      }
    </div>
  )
}
