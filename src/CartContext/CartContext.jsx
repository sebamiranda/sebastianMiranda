
import React, { createContext, useState } from 'react'

//crear contexto
export const myContext = createContext(null);

export default function CartContext({children}) {

  const [ cart, setCart ] = useState([]);
  const [ existe, setExiste ] = useState(false);
  

function addItem(item,quantity){

const productCart = {
      id: item.id,
      title: item.title,
      imagen: item.pictureURL,
      price: item.price,
      quantity: quantity,
      totalPrice: item.price * quantity,
    };
    
   // console.log('creo product cart' + JSON.stringify(productCart))
   
   const aux = cart.find((elemento) => elemento.id === item.id);
 
    if ( aux ){  
      setCart(
        cart.map((producto) => {
        if(producto.id === aux.id){

          return { 
            ...producto, 
            quantity: quantity + aux.quantity, 
            totalPrice: item.price * (quantity + aux.quantity),
          };
        }else {
          return producto;
        }

      })
      );
      
    }else{    
     setCart([...cart, productCart]);  

    } 
}

function removeItem (itemId){
//eliminar un item del cart usando el id
const cartFilter = cart.filter( (producto) => producto.id !== itemId);
setCart(cartFilter); 
}

function clear(){
    setCart([]);

}

 const isInCart =(item) =>{
//    // return i | -1;
//    const aux = cart.find((elemento) => elemento.id === item.id); 
//    if (aux !== undefined){
//     setExiste(true)   
//    } ;
//    return existe;
 }

function totalProductosCart(cart){ 
      const total = cart.reduce((prev, next) => prev + next.quantity, 0);
      return total;
 }




  return (
<>
    <myContext.Provider value={{cart, addItem, removeItem, clear, isInCart,totalProductosCart }}>{children}</myContext.Provider>
</>
  )
}
