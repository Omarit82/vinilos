import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";

function Cds(){
    const mensaje = 'Nuestros Cds!'

    return (
        <main className="p-5">
            <div className="d-flex justify-content-center align-items-center">
                <ItemListContainer greeting = {mensaje} /> 
            </div>    
        </main>
    )
}

export default Cds;