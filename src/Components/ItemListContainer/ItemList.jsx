import { Item } from './Item';

export const ItemList = ({ productos }) => {
    console.log(productos);


    return(
        <>
        {productos.map((item, index) =>(
            <Item key={ index } disco = { item } />           
        ))}
        </>
    )
}