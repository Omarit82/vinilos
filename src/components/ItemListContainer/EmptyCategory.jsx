import { Link } from "react-router-dom"



export const EmptyCategory = () => {
    return (
        <div className="tarjeta p-3 justify-content-start">
            <h2 className="text-center">Ups!!..Aun no tenemos discos en esta categoria...</h2>
            <p className="text-center">Presiona aqui para volver al home..</p>
            <Link to={"/"} className="btn btn-info">Volver al Home</Link>
        </div>
    )
}