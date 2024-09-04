import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";


function Error(){
    const mensaje = 'ERROR 404'

    return (
        <main className="p-5">
            <div className="d-flex justify-content-center align-items-center">
                <ItemListContainer greeting = {mensaje} />
            </div>    
        </main>
    )
}

export default Error;