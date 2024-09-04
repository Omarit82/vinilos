import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";


function About(){
    const mensaje = 'About Us!'
    const empty = '';

    return (
        <main className="p-5">
            <div className="d-flex justify-content-center align-items-center">
                <ItemListContainer greeting = {mensaje} filtro={empty}/> 
            </div>    
        </main>
    )
}

export default About;