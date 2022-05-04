// import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import './components/navBar/navBar.css'
import NavBar from './components/navBar/navBar.js';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Hola soy un saludo'}/>
    </div>
  );
}

export default App;
