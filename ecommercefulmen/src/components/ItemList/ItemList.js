import Item from '../Items/Items';
import './ItemList.css'

function ItemList({items}) {

    return (
        <div className="itemList">
            {items.map((el) => <Item key={el.id} categoria={el.categoria} name={el.name} price={el.price} img={el.img}/>)}
        </div>
    );
} export default ItemList