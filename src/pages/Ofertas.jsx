import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";

function Ofertas(){
    const mensaje = 'Nuestras Ofertas!';
    const ofertas = 'ofertas';
    return (
        <main className="p-5">
            <div className="d-flex justify-content-center align-items-center">
                <ItemListContainer greeting = {mensaje} filtro={ofertas}/> 
            </div>    
        </main>
    )
}

export default Ofertas;