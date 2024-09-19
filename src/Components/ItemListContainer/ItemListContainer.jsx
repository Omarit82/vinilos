import { ItemList} from "./ItemList";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where, orderBy} from 'firebase/firestore';
import DiscoImg from "../assets/img/disco.png";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";


export const ItemListContainer = ( {greeting} ) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { categoriaId } = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const discos = collection(db,"discos");
        const consulta = query(discos,orderBy("anioRelease","desc"));
        if (categoriaId == null){
            getDocs(consulta)
            .then((snapshot) => {
                setLoading(false);
                setProductos(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
            })
            .catch((error)=>{
                setError(true);
                console.error(error);
            })
        }else{
            const q = query(discos,where(categoriaId, "==", true));
            getDocs(q)
            .then((snapshot) => {
                setLoading(false);
                
                setProductos(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
            }).catch((error)=>{
                setError(true);
                console.error(error);
            })
        }
    }, [categoriaId])

    return (
        <main>
            {
            error ? <p>Ocurrio un error al cargar la informacion</p>:
                loading ? <Loader /> : 
                <>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={ DiscoImg } alt="disco"  className="disco m-3" />
                        <h2>{categoriaId}{greeting}</h2>
                        <img src={ DiscoImg } alt="disco"  className="disco m-3" />
                    </div>
                    <div>
                        <ItemList productos={productos} />
                    </div>
                </>
            }
        </main>
    )
}