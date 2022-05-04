import './navBar.css'
import logo from '../imagenes/logi.jpg'
import CartWidget from '../CartWidget/CartWidget'

function navBar() {
    return(
    <header className="App-encabezado">
        <img className='logo'src={logo} alt={'logoful'}width={'300px'}></img>
        <ul>
            <li><a href="index.html">home</a></li>
            <li><a href="nosotros.html">Nosotros</a></li>
            <li><a href="servicios.html">Servicios</a> </li>
            <li><a href="productos.html">Productos</a></li>
            <li><a href="contacto.html">Contacto</a></li>
        </ul>
        <CartWidget/>  
    </header> 
 
    )
}
    export default navBar