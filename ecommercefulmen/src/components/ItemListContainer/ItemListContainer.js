import {useEffect, useState } from 'react';
// import ItemCount from '../ItemCount'
import React from 'react'
import ItemList from '../ItemList/ItemList';

const productos = [
  {id: "01", categoria: "Diodo", name: "Diodo Europeo", price: 300, img: '"./imagenes/diodo1.jpg"'},
  {id: "02", categoria: "Bomba Agua", name: "Bombas aquatec", price: 350, img: "../imagenes/bomba1.jpg"},
  {id: "03", categoria: "Cristal", name: "Cristal luz guia", price: 400, img: "../imagenes/cristal.jpg"},
  {id: "04", categoria: "Peltier", name: "Peltier Original", price: 450, img: "../imagenes/peltier1.jpg"},
  {id: "05", categoria: "Zafiro", name: "Zafiro frontal", price: 500, img: "../imagenes/zafiro.jpg"},
  {id: "06", categoria: "tapas", name: "Tapas laterales", price: 500, img: "../imagenes/tapas.jpg"}
];

const getFetch = new Promise ((resolve)=>{
  setTimeout(()=>{
    resolve(productos);
  },2000);
})


function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true)


  useEffect(() => {
    getFetch
    .then(res => setItems(res))
    .catch(err=>console.log(err))
    .finally(()=>setLoader(false))
  }, [])
  

  return (
    <div className="Itemcount">
      {/* <ItemCount stock={5} initial={1} onAdd={(cantidad)=>console.log(`${cantidad} cantidad de productos`) }/> */}
      {loader?<h2>Cargando...</h2>:<ItemList items={items}/>}
    </div>
    
  )
}

export default ItemListContainer








