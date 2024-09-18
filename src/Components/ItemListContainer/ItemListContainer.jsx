import { ItemList} from "./ItemList";
import { useEffect, useState } from "react";
import { getDiscosByCategory } from "../../getData";
import DiscoImg from "../assets/img/disco.png";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";


export const ItemListContainer = ( {greeting} ) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { categoriaId } = useParams();
    
    useEffect(() => {
        const asyncFunc =  getDiscosByCategory;
        asyncFunc (categoriaId)
            .then(response => {
                setProductos(response);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setError(true);
            })
    }, [categoriaId])

    return (
        <main>
            {error ? <p>Ocurrio un error al cargar la informacion</p>:
                loading ? <Loader /> : <>
                <div className="d-flex justify-content-center align-items-center">
                    <img src={ DiscoImg } alt="disco"  className="disco m-3" />
                    <h2>{categoriaId}{greeting}</h2>
                    <img src={ DiscoImg } alt="disco"  className="disco m-3" />
                </div>
                <div>
                    <ItemList productos={productos} />
                </div></>
            }
            
        </main>
    )
}