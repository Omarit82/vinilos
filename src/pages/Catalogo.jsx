import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";


function Catalogo(){
    
    const mensaje = 'Nuestro catalogo completo';
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <ItemListContainer greeting = {mensaje} />
            </div>    
        </>
    )
}

export default Catalogo;