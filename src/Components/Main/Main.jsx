import { ItemListContainer } from "../Header/Components/ItemListContainer";
import DiscoImg from "./assets/img/disco.png";
import './Main.css';

export const Main = () => {

    const mensaje = 'Bienvenidos!'

    return (
        <main className=" vh-100">
            <div className="d-flex justify-content-center align-items-center">
                <img src={ DiscoImg } alt="disco"  className="disco me-3" />
                <ItemListContainer greeting = {mensaje} /> 
                <img src={ DiscoImg } alt="disco" className="disco ms-3" /> 
            </div>    
        </main>
    )
}