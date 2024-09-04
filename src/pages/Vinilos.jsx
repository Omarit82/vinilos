import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";

function Vinilos(){
    const mensaje = 'Nuestros Vinilos!';
    const vinilos = 'vinilos';
    return (
        <main className="p-5">
            <div className="d-flex justify-content-center align-items-center">
                <ItemListContainer greeting = {mensaje} filtro={vinilos} /> 
            </div>    
        </main>
    )
}

export default Vinilos;