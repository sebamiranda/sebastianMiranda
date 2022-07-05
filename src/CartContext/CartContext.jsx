
import React, { createContext, useState } from 'react'

//crear contexto
export const myContext = createContext(null);

export default function CartContext({children}) {

  const [ cart, setCart ] = useState([]);

function addItem(item,quantity){
    //agregar item al carrito
    // console.log('llegue addItem');
    // console.log(item.title);
    // console.log(quantity);
    // console.log(item.id)

    const aux = cart.find((elemento) => elemento.id == item.id);
 
    console.log(cart)
    console.log('aux')
   console.log(aux)
   
    const productCart = {
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: quantity,
      totalPrice: item.price * quantity,
    };
  
    if ( aux ){
      
      setCart(
        cart.map((producto) => {
        if(producto.id === item.id){
          return { ...producto, quantity: aux.quantity + quantity, totalPrice: item.price * aux.quantity};
        }else return producto;

      })
      );
      
    }else{
      setCart([...cart, productCart])



    }
  //  setCart([...cart, productCart]);

    console.log('cantidad' + productCart.quantity )
  console.log(cart)
    {JSON.stringify(productCart)}
}

function removeItem (itemId){
//eliminar un item del cart usando el id
}

function clear(){
    setCart([]);

}

const isInCart =(id) =>{
   // return i | -1;
}






  return (
<>
    <div>CartContext</div>
    <myContext.Provider value={{cart, addItem, removeItem, clear, isInCart }}>{children}</myContext.Provider>
</>
  )
}
