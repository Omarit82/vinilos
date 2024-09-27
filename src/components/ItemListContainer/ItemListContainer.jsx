import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import './style.css'
import { useContext, useEffect, useState } from "react";
import { getDocs, collection, query, where, orderBy } from 'firebase/firestore'
import { Loader } from '../Loader/Loader';
import { Error } from "../Error/Error";
import { db } from "../../firebase/config"
import { EmptyCategory } from "./EmptyCategory";
import { SearchContext } from "../../context/SearchContext"; 


export const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { search } = useContext(SearchContext);

    useEffect(()=>{
        //console.log("Se busco: "+search);
        //console.log(products);
        /** busqueda por autor */
        const res = products.filter((item) => ((item.titulo.toLowerCase()).includes(search.toLowerCase())||(item.autor.toLowerCase().includes(search.toLowerCase()))));
        setProductosFiltrados(res);
    },[search])


    useEffect(()=>{
        const info = collection(db,"discos")
        let discos;
        if(categoryId === "Ofertas"){
            discos = query (info, where("Ofertas","==",true), orderBy("anioRelease","desc"));
        }else{
            discos = categoryId ? query(info, where("genero","==",categoryId), orderBy("anioRelease","desc")): query(info, orderBy("anioRelease","desc"))
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
            {
            (search !=='') ? <ItemList items={productosFiltrados } />:
            (products.length>0)?<ItemList items={products } /> : <EmptyCategory />}
        </main>
    )
}