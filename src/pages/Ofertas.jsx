import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";

function Ofertas(){
    const mensaje = 'Nuestras Ofertas!'

    return (
        <main className=" vh-100 p-5">
            <div className="d-flex justify-content-center align-items-center">
                <ItemListContainer greeting = {mensaje} /> 
            </div>    
        </main>
    )
}

export default Ofertas;