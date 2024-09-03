import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";


function Catalogo(){
    const mensaje = 'Catalogo!'

    return (
        <main className=" vh-100 p-5">
            <div className="d-flex justify-content-center align-items-center">
                <ItemListContainer greeting = {mensaje} /> 
            </div>    
        </main>
    )
}

export default Catalogo;