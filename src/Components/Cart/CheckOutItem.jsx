import './style.css';

export const CheckOutItem = ( {item} ) =>{


    return(
        <article className="cardOut">
            <div className='d-flex justify-content-around '>
                <div className="p-2">
                    <h2>Titulo: {item.titulo}</h2>
                    <h3>Autor: {item.autor}</h3>
                    <h3>Cantidad: {item.quantity}</h3>
                    <h3>Precio Unitario: ${item.precio}</h3>
                    <h3 className="mb-0 pb-5">Precio Total: ${item.precio * item.quantity}</h3>
                </div>
                <div className="d-flex align-items-center">
                    <img src={item.imagen} alt="Imagen del disco" className='imgDisco' />
                </div>
            </div>
            <div className='m-3'>
                <button className="btn btn-danger" onClick={() => handleClick(item)} >Eliminar</button>
            </div>
        </article>
    )
}