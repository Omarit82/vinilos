import { ItemListContainer } from "../Components/ItemListContainer/ItemListContainer";


function About(){
    const mensaje = 'About Us!'

    return (
        <main className="p-5">
            <div className="d-flex justify-content-center align-items-center">
                <ItemListContainer greeting = {mensaje} /> 
            </div>    
        </main>
    )
}

export default About;