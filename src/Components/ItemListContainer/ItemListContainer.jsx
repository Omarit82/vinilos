import { ItemCount } from "./ItemCount";
import { ItemList} from "./ItemList";
import DiscoImg from "../assets/img/disco.png";
import { useEffect, useState } from "react";

export const ItemListContainer = ( {greeting} ) => {

    /*Estado para almacenar los productos.*/ 
    const [productos, setProductos] = useState([]);

    /**Funcion asyncrona para recibir los discos desde la api */
    async function getDiscos(){
        try {
            const respuesta =  await fetch('https://66804c6456c2c76b495bb799.mockapi.io/discos/');
            if(!respuesta.ok){
                throw new Error ('Error en la solicitud '+ respuesta.status);
            }
            const datos = await respuesta.json();
            setProductos(datos); 
        } catch (error) {
            throw new Error ('Error en la solicitud '+ error);
        }
    }

    useEffect(()=>{
        getDiscos();
    }, []);
    
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