import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import './style.css'
import { useEffect, useState } from "react";
import { getDocs,getFirestore, collection, query, where, orderBy } from 'firebase/firestore'
import { Loader } from '../Loader/Loader';
import { Error } from "../Error/Error";

export const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const db = getFirestore()
        const info = collection(db,"discos")
        let discos;
        if (categoryId != null){
            const filtro = query(info, where(categoryId,"==",true), orderBy("anioRelease","desc"));
            discos = filtro;
        }else{
            const consulta = query(info, orderBy("anioRelease","desc"));
            discos = consulta;
        }
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