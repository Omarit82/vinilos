import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDiscoPorId } from '../../getData';
import { ItemDetail } from './ItemDetail';



export const ItemDetailContainer = ()=>{
    const [producto, setProducto] = useState([]);
   
    const { itemId } = useParams();
  
    
    useEffect(()=>{
        getDiscoPorId(itemId)
            .then(response => {
                setProducto(response);
            })
            .catch(error => {
                console.error(error);
            })
    }, [itemId])

    return(
        <main className='d-flex justify-content-center'>
            <ItemDetail disco ={producto} />
        </main>
        
    );
}