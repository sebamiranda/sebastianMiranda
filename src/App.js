
//@ts-check
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  let cantidad=15;
  let greeting='Proximamente nuestro catalogo de productos en linea...'
  let initial=15;
  let stock=15;

  function onAdd(valor){
    if(valor!=0){
    alert("Usted agrego "+ valor + " productos al carrito de compras.")
  }
  }

  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <NavBar cantidad={cantidad}></NavBar>

       
            <Routes>
                  <Route path='/' element={<ItemListContainer greeting={greeting}/>} />
                  <Route path='/category/:idCategory' element={<ItemListContainer greeting={greeting}/>} />
                  <Route path='/item/:idItem'  element={< ItemDetailContainer/>} />
            </Routes>
         
       {/* <ItemListContainer greeting={greeting}/>
       <ItemCount stock ={stock} initial={initial} onAdd={onAdd}/>
      < ItemDetailContainer/> */}
        
        
        </BrowserRouter>
      <div >FOOTER</div>
       
      </header>
    </div>
  );
}

export default App;
