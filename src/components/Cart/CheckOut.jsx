import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { useForm } from "react-hook-form";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { Link } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { UserContext } from "../../context/UserContext";

export const CheckOut = () => {

    const { handleSubmit } = useForm();
    const {carrito, precioTotal, cartReset} = useContext(CartContext);
    const { user } = useContext(UserContext);
    const [ pedidoId, setPedidoId ] = useState("");
    const [ loading, setLoading] = useState(false);
    

    
    const ajusteStock = () => {
        carrito.map((item) =>{ 
            const itemRef = doc(db,"discos",item.id)
            getDoc(itemRef)
            .then((snapshot)=>{
                updateDoc(itemRef,{stock:item.stock-item.quantity})
            })
             
        })
    }

    const comprar = () => {
        const order = {
                cliente: user,
                productos: carrito,
                importe: precioTotal(),
                fecha: new Date()
            }
            
            const pedidosRef = collection(db, "pedidos");
            addDoc(pedidosRef, order)
            .then((doc)=>{
                setPedidoId(doc.id);
                ajusteStock();
            }).catch((e)=>{
                console.log(e);
            });
            cartReset();
    }

    useEffect(()=>{
        setLoading(false)
    },[pedidoId])
  
    if(pedidoId){   
        /** Hacemos un early return  para cortar el codigo en el caso de que llegue un pedidoID (se realizo una compra) */
        return (
            <main className="flex-column">
                <h2 className="text-center">Muchas gracias por tu compra!</h2>
                <h3 className="text-center">Tu identificador de compra es:</h3>
                <h3 className="compraId text-center">{pedidoId}</h3>
                <Link to='/' className="btn-success btn finalizar">Volver al Home</Link>
            </main>
        )
    }

    return(
        <main className="flex-column">
            {
                loading && <Loader />
            }
            <h2>Finalizar Compra</h2>
            <div>
                <table>
                    <caption>Resumen de la compra:</caption>
                    <thead>
                        <tr>
                            <th scope="col">Titulo</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrito.map((data) => (
                            <tr>
                                <th>{data.titulo}</th>
                                <td>{data.quantity}</td>
                                <td>${data.precio}</td>
                                <td>${data.precio*data.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row" colspan="2">Importe Total: </th>
                            <td></td>
                            <td>${precioTotal()}</td>
                        </tr>
                    </tfoot>   
                </table>
            </div>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <button className="btn btn-success" type='submit' onClick={()=>{setLoading(true)}} >Comprar</button>
            </form>
            
        </main>
    )
}