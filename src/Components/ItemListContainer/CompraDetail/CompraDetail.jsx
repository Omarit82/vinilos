import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { CheckOutItem } from "./CheckOutItem";

export const CompraDetail = ()=>{
   
    const { carrito } = useContext(CartContext);


    return(
        <>
            <main>
                <h2 className="mb-0 text-center">Detalle de la compra</h2>
            </main>
            {
                carrito.map((prod) => (                
                        <CheckOutItem item={prod} key={prod.id} />
                ))
            }

        </>
        
    )
}