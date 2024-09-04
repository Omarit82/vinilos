import { Link, useParams } from 'react-router-dom';
import { getDiscoPorId } from "../getData";
import { useState, useEffect} from 'react';
import { ItemListDetail } from '../Components/ItemListContainer/ItemListDetail';

export const Producto = ()=>{
    const [producto, setProducto] = useState([]);

    const  { itemId } = useParams();

    useEffect(()=>{
        getDiscoPorId(itemId)
            .then(response =>{
                setProducto(response);
            })
            .catch(error => {
                console.log(error);
            })
    },[]);
    console.log(producto);
    return(
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <ItemListDetail disco={producto} />
            <Link to={'/catalogo'} className='btn btn-info m-3' > Volver </Link>
        </div>
    )
}