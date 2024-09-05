import { ItemList} from "./ItemList";
import { useEffect, useState } from "react";
import { getDiscos, getDiscosByCategory } from "../../getData";
import DiscoImg from "../assets/img/disco.png";
import { useParams } from "react-router-dom";


export const ItemListContainer = ( {greeting} ) => {
    const [productos, setProductos] = useState([]);
    
    const { categoriaId } = useParams();
    
   
    
    useEffect(() => {
        const asyncFunc = categoriaId ? getDiscosByCategory : getDiscos

        asyncFunc (categoriaId)
            .then(response => {
                
                setProductos(response);
            })
            .catch(error => {
                console.error(error);
            })
    }, [categoriaId])

    return (
        <main>
            <div className="d-flex justify-content-center align-items-center">
                <img src={ DiscoImg } alt="disco"  className="disco m-3" />
                <h2>{categoriaId}{greeting}</h2>
                <img src={ DiscoImg } alt="disco"  className="disco m-3" />
            </div>
            <div>
                <ItemList productos={productos} />
            </div>
        </main>
    )
}