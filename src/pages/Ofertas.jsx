import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";
import DiscoImg from "../assets/img/disco.png";

function Ofertas(){
    const mensaje = 'Nuestras Ofertas!'

    return (
        <main className=" vh-100 p-5">
            <div className="d-flex justify-content-center align-items-center">
                <img src={ DiscoImg } alt="disco"  className="disco me-3" />
                <ItemListContainer greeting = {mensaje} /> 
                <img src={ DiscoImg } alt="disco" className="disco ms-3" /> 
            </div>    
        </main>
    )
}

export default Ofertas;