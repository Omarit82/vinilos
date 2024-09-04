import { ItemCount } from "./ItemCount";
import { ItemList} from "./ItemList";
import { useEffect, useState } from "react";
import { getDiscos } from "../../getData";
import DiscoImg from "../assets/img/disco.png";


export const ItemListContainer = ( {greeting} ) => {
    const [productos, setProductos] = useState([]);
    
    
    
    useEffect(()=>{
        getDiscos()
            .then(response =>{
                setProductos(response)
            })
            .catch(error => {
                console.log(error);
            })
    },[]);
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <img src={ DiscoImg } alt="disco"  className="disco m-3" />
                <h2>{greeting}</h2>
                <img src={ DiscoImg } alt="disco"  className="disco m-3" />
            </div>
            <div>
                <ItemList productos={productos} />
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad Agregada', quantity)} />
            </div>
        </div>
    )
}