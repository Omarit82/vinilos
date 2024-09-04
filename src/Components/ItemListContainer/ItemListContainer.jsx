import { ItemList} from "./ItemList";
import { useEffect, useState } from "react";
import { getDiscos } from "../../getData";
import DiscoImg from "../assets/img/disco.png";


export const ItemListContainer = ( {greeting, filtro} ) => {
    const [productos, setProductos] = useState([]);
    
    
    
    useEffect(()=>{
        getDiscos()
            .then(response =>{
                filtrado(response);
                ///setProductos(response);
            })
            .catch(error => {
                console.log(error);
            })
    },[]);

    async function filtrado(rsp){
        let filtrado;
        switch (filtro) {
            case "ofertas":
                filtrado = rsp.filter(item => item.isOferta == true);
                setProductos(filtrado);
                break;
            case "vinilos":
                filtrado = rsp.filter(item => (item.formato).includes('vinilo'));
                setProductos(filtrado);
                break;
            case "cd":
                filtrado = rsp.filter(item => (item.formato).includes('cd'));
                setProductos(filtrado);
                break;
            default:
                setProductos(rsp);
                break;
        }       
    }
    

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center">
                <img src={ DiscoImg } alt="disco"  className="disco m-3" />
                <h2>{greeting}</h2>
                <img src={ DiscoImg } alt="disco"  className="disco m-3" />
            </div>
            <div>
                <ItemList productos={productos} />
            </div>
        </div>
    )
}