
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar'


function App() {
  let cantidad=15;
  let greeting='Proximamente nuestro catalogo de productos en linea...'

  return (
    <div className="App">
      <header className="App-header">
        
       <NavBar cantidad={cantidad}></NavBar>
       <ItemListContainer greeting={greeting}/>
       
      </header>
    </div>
  );
}

export default App;
