import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";


function Error(){
    const mensaje = 'ERROR 404';
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <ItemListContainer greeting = {mensaje} />
            </div>    
        </>
    )
}

export default Error;