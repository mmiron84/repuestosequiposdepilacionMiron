// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemCount from './components/ItemCount';
import './components/navBar/navBar.css'
import NavBar from './components/navBar/navBar.js';

function App() {
  // const [count, setcount] = useState(0) 
  


  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer stock={5} initial={1}/>
    </div>
  )
}

export default App;
