import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CheckOutItem } from "./CheckOutItem";
import { Empty } from "./Empty";

export const Cart = () => {
    const { carrito, precioTotal,vaciarCarrito} = useContext(CartContext);
    let empty = false

    if (carrito.length == 0){
        empty=true;
    }
    console.log(precioTotal());
    return (
        empty ? <Empty /> :
        <main className="flex-column">
            <h2 className="mb-0 text-center p-5">Detalle de la compra</h2>
            <h3>Precio total de la compra: ${precioTotal()}</h3>
            <section>
                {
                    carrito.map((prod,id) => (                
                            <CheckOutItem item={prod} key={id} />
                    ))
                }
            </section>
            <button className='btn-danger btn mb-5' onClick={vaciarCarrito}>Vaciar Carrito</button>
        </main>
    )
}