import { Item } from './Item';
import './css/itemList.css';

export const ItemList = ({ productos }) => {

    return(
        <div className='seccion'>
            {productos.map((item, index) =>(
                <Item key={ index } disco = { item } />           
            ))}
        </div>
    )
}