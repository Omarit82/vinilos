import { Link } from "react-router-dom"


export const Empty = () => {
    return(
        <main>
            <div className="emptyMain">
                <h2 className="text-center">Tu carrito esta vacio!</h2>
                <h3 className="text-center">Has click para volver a nuestro catalogo!</h3>
                <Link to='/' className="btn btn-info w-25">Click aqui!</Link>
            </div>
        </main>
        
    )
}