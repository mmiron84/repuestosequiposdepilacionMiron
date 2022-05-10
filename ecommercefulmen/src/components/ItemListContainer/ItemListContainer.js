import ItemCount from '../ItemCount'



import React from 'react'

function ItemListContainer() {
  return (
    <div className="Itemcount">
      <ItemCount stock={5} initial={1} onAdd={(cantidad)=>console.log(`${cantidad} cantidad de productos`) }/>
    </div>
    
  )
}

export default ItemListContainer








