import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { Error } from '../Error/Error';
import { Loader } from '../Loader/Loader';
import { db } from '../../firebase/config'

export const ItemDetailContainer = () => {

    const {id} =useParams();
    const [disco, setDisco] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(()=>{
        const info = doc(db,"discos",id);
        getDoc(info)
        .then((snapshot) => {
            setLoading(false);
            setDisco({id:snapshot.id, ...snapshot.data()})
        })
        .catch((error)=>{
            setError(true);
            console.error(error);
        })
    },[id])
    
    return(
        error ? <Error /> : loading ? <Loader /> :
        <main>
            <ItemDetail disco={disco}/>
        </main>
    )
}