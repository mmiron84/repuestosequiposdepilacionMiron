import itemimg from '../imagenes/diodo1.jpg'
// import ItemList from '../ItemList/ItemList';
import ItemCount from '../ItemCount'
import './Items.css';

function Items({categoria, name, price, img}) {

    return (
        <div className="item">
            <img className="imagenes" src={itemimg} alt="" />
            <div className='iteminfo'>
                <h3 className="title">{name}</h3>
                <ItemCount initial={1} stock={5} onAdd={(quantity)=>console.log(`${quantity} unidad/es agregada/s al pedido`)}/>
                <p className='precio'>{`Precio: $${price}`}</p>
            </div>
        </div>
    );
}export default Items
