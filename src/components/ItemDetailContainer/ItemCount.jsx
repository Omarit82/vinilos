import { useContext, useState } from 'react';
import './style.css';
import { CartContext } from '../../context/CartContext';

export const ItemCount = ({ disco }) =>{
    const { addAlCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

   
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
    
    return (
        <div className="contador">
            <div className="contadorComandos">
                <button className="btn btn-info" onClick={ decrement }> - </button>
                {
                   disco.stock === 0 ? <h4 className="cantidad sinStock">0</h4>:<h4 className="cantidad">{ quantity }</h4>
                }
                <button className="btn btn-info" onClick={ increment }> + </button>
            </div>
            <div>
            {
                disco.stock === 0 ? <button className="btn btn-info mb-3" disabled onClick={()=>addAlCart(disco, quantity)} >Add al Cart</button>:
                <button className="btn btn-info mb-3" onClick={()=>addAlCart(disco, quantity)} >Add al Cart</button>
            }
            </div>
        </div>
    )

}