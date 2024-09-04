import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";

function Catalogo(){
    const mensaje = 'Catalogo!';
    const catalogo = 'catalogo';
    
    return (
        <main className=" p-5">
            <div className="d-flex justify-content-center align-items-center">
                <ItemListContainer greeting = {mensaje} filtro={catalogo} /> 
            </div>    
        </main>
    )
}

export default Catalogo;