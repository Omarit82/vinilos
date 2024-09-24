import { useContext } from 'react';
import './style.css';
import { CartContext } from '../../context/CartContext';

export const CartItem = ( {item} ) =>{

    const { eliminarItem } = useContext(CartContext);

    return(
        <article className="cardOut">
            <div className='d-flex justify-content-around flex-md-row flex-column'>
                <div className="p-2">
                    <h2>Titulo: {item.titulo}</h2>
                    <h3>Autor: {item.autor}</h3>
                    <h3>Cantidad: {item.quantity}</h3>
                    <h3>Precio Unitario: ${item.precio}</h3>
                    <h3 className="mb-0 pb-5">Precio Total: ${item.precio * item.quantity}</h3>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                    <img src={item.imagen} alt="Imagen del disco" className='imgDisco' />
                </div>
            </div>
            <div>
                <button className="btn btn-danger mt-2" onClick={() => eliminarItem(item.id)} >Eliminar</button>
            </div>
    
        </article>
    )
}