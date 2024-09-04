import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";

function Home(){
    const mensaje = 'Bienvenidos!';
    const empty = '';
    return (
        <main className="p-5">
            <div className="d-flex justify-content-center align-items-center">
                <ItemListContainer greeting = {mensaje} filtro={empty}/> 
            </div>    
        </main>
    )
}

export default Home;