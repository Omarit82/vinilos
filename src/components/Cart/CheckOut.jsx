import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { useForm } from "react-hook-form";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import { db } from '../../firebase/config';
import { Link } from "react-router-dom";
import { Loader } from "../Loader/Loader";

export const CheckOut = () => {

    const { register, handleSubmit } = useForm();
    const {carrito, precioTotal, cartReset} = useContext(CartContext);
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

    const comprar = (info) => {
        const order = {
            cliente: info,
            productos: carrito,
            importe: precioTotal()
        }
        
        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, order)
        .then((doc)=>{
            setPedidoId(doc.id);
            ajusteStock();
        }).catch((e)=>{
            console.log(e);
        })
        ;
        cartReset();
    }

    useEffect(()=>{
        setLoading(false)
    },[pedidoId])
  
    if(pedidoId){   
        /** Hacemos un early return en el caso de que llegue un pedidoID (se realizo una compra) */
        return (
            <main className="flex-column">
                <h1 className="text-center">Muchas gracias por tu compra!</h1>
                <h2>Tu identificador de compra es:</h2>
                <h2 className="compraId">{pedidoId}</h2>
                <Link to='/' className="btn-success btn finalizar">Volver al Home</Link>
            </main>
        )
    }

    return(
        <main className="flex-column">
            <h1>Finalizar Compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <input className="m-2" type="text" placeholder="Ingrese su nombre" required {...register("nombre")}  />
                <input className="m-2"  type="text" placeholder="Ingrese su apellido" required {...register("apellido")} />
                <input className="m-2"  type="email" name="email" placeholder="Ingrese su email" required {...register('email')}/>
                <button className="btn btn-success" type='submit' onClick={()=>{setLoading(true)}} >Comprar</button>
            </form>
            {
                loading && <Loader />
            }
        </main>
    )
}