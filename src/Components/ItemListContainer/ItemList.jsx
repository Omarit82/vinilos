import { Item } from './Item';
import './ItemList.css';

export const ItemList = ({ productos }) => {


    return(
        <div className='seccion'>
            {productos.map((item, index) =>(
                <Item key={ index } disco = { item } />           
            ))}
        </div>
    )
}