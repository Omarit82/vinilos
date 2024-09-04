import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";

function Home(){
    const mensaje = 'Bienvenidos!'

    return (
        <main className="p-5">
            <div className="d-flex justify-content-center align-items-center">
                <ItemListContainer greeting = {mensaje} /> 
            </div>    
        </main>
    )
}

export default Home;