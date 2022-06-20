
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'


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
        
       <NavBar cantidad={cantidad}></NavBar>
       <ItemListContainer greeting={greeting}/>
       <ItemCount stock ={stock} initial={initial} onAdd={onAdd}/>
       
      </header>
    </div>
  );
}

export default App;
