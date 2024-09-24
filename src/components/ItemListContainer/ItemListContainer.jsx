import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import './style.css'
import { useEffect, useState } from "react";
import { getDocs, collection, query, where, orderBy } from 'firebase/firestore'
import { Loader } from '../Loader/Loader';
import { Error } from "../Error/Error";
import { db } from "../../firebase/config"

export const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const info = collection(db,"discos")
        
       const discos = categoryId ? query(info, where(categoryId,"==",true), orderBy("anioRelease","desc")): query(info, orderBy("anioRelease","desc"))
    
        getDocs(discos)
        .then((snapshot) => {
            setLoading(false);
            setProducts(
                snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() }))
            );
        })
        .catch((error)=>{
            setError(true);
            console.error(error);
        })    
    },[categoryId])
    
    
    return(
        error ? <Error />: loading ? <Loader /> : 
        <main>
            <ItemList items={products } />
        </main>
    )
}