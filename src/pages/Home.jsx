import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";

function Home(){
    const mensaje = 'Bienvenidos!';
    const empty = '';
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <ItemListContainer greeting = {mensaje} /> 
            </div>    
        </>
    )
}

export default Home;