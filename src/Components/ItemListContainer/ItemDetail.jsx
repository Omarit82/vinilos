import './css/ItemDetail.css';
import { ItemCount } from './ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';



export const ItemDetail = ({ disco })=>{

    const { carrito, addAlCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    console.log(carrito);
    
   
    const increment = ()=>{
        if(quantity < disco.stock){
            setQuantity(quantity+1);
        }
    }

    const decrement = ()=>{
        if(quantity>1){
            setQuantity(quantity-1);
        }
    }
    
    return(
        <article className="detalle">
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h3 className='text-center mt-3'>{ disco.titulo }</h3> 
                <hr className='linea'/>
                <div>
                    <h4>Autor: { disco.autor }</h4>
                    <h4>Año de salida: { disco.anioRelease }</h4>
                    <h4>Formato: {disco.formato}</h4>
                    <h4>Genero: {disco.genero}</h4>
                    <h5>Stock disponible: {disco.stock}</h5>
                    <h5>Precio: USD { disco.precio }</h5>
                </div>              
            </div>
            <img src={disco.imagen} alt={disco.titulo} className='imgDisco m-2' />
            <ItemCount cantidad={quantity} increment={increment} decrement={decrement} handleCart={()=>{
                addAlCart(disco, quantity)
            }}/>
        </article>
    )
}