


export const CheckOutItem = ( {item} ) => {
    
    return(
        <div>
            <h2>Titulo: {item.titulo}</h2>
            <h3>Autor: {item.autor}</h3>
            <h3>Cantidad: {item.quantity}</h3>
            <h3>Precio Unitario: ${item.precio}</h3>
            <h2>Precio Total: {item.precio * item.quantity}</h2>
        </div>
    )
}