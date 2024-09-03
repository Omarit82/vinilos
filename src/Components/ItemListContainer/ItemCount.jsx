import { useState } from "react"
import './ItemCount.css';


export const ItemCount = ({ stock, initial, onAdd}) =>{

    const [quantity, setQuantity] = useState(initial);

    const increment = ()=>{
        if(quantity < stock){
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
                <button onClick={ decrement }> - </button>
                <h4 className="cantidad">{ quantity }</h4>
                <button onClick={ increment }> + </button>
            </div>
            <div>
                <button onClick={()=> onAdd(quantity)} disabled={!stock} >Add al Cart</button>
            </div>
        </div>
    )

}