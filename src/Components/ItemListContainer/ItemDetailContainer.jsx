import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { ItemDetail } from './ItemDetail';


export const ItemDetailContainer = ()=>{
    const [ producto, setProducto ] = useState([]);
    const [ error, setError ] = useState(false);
   
    const { itemId } = useParams();
  
    
    useEffect(()=>{
        /** FILTRADO DE FIREBASE POR ID */
        const db = getFirestore();
        const documento = doc(db, "discos",itemId);
        getDoc(documento)
        .then((snapshot) => {
            if(snapshot.exists()){
                setProducto(snapshot.data());
            }else{
                setError(true);
            }
            
        })
    }, [])

    return(
        <main className='d-flex justify-content-center'>
            { error ? <h2 className='text-center mt-5 vh-100'>Error al cargar el producto</h2> : 
            <ItemDetail disco ={producto} />}
        </main>
        
    );
}