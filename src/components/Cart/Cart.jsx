import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "./CartItem";
import { Empty } from "./Empty";
import { Link } from "react-router-dom";

export const Cart = () => {
    const { carrito, precioTotal,vaciarCarrito} = useContext(CartContext);
    let empty = false

    if (carrito.length == 0){
        empty=true;
    }
    
    return (
        empty ? <Empty /> :
        <main className="flex-column">
            <div className="cardOut">
                <h2 className="mb-0 text-center p-5">Detalle de la compra</h2>
                <h3>Precio total de la compra: </h3>
                <h3>${precioTotal()}</h3>
            </div>
            <section>
                {
                    carrito.map((prod,id) => (                
                            <CartItem item={prod} key={id} />
                    ))
                }
            </section>
            <button className='btn-danger btn mb-2' onClick={vaciarCarrito}>Vaciar Carrito</button>
            <Link to='/checkout' className="btn btn-success mb-5 finalizar">Finalizar Compra</Link>
        </main>
    )
}