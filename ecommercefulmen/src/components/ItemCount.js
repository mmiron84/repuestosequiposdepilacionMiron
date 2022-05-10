import './ItemCount.css'
import React, { useState } from 'react'


function ItemCount({stock,initial,onAdd}) {
const [cantidad, setcantidad] = useState(initial)

    function incrementar() {
        if (cantidad<stock) {
            setcantidad(cantidad+ 1 );            
        }
    }

    function decremento() {
        if (cantidad >1) {
           setcantidad(cantidad - 1);
        }
        
    }

    function agregoCarrito() {
        onAdd(cantidad);
    }

    return (
    <div className='itemCount'>
        <p className='cantidadProducto' id='numero'>{cantidad}</p>
        <button className='menos' onClick={decremento}>  -  </button>
        <button className='agregar' onClick={agregoCarrito}>  Agregar  </button>
        <button className='mas' onClick={incrementar}>  +  </button>
            
    
    </div>
  )
}

export default ItemCount