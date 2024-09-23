import {createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext();

const carritoInicial = (JSON.parse(localStorage.getItem('carrito')) || []);

export const CartProvider = ({children}) =>{
    const [carrito, setCarrito ] = useState(carritoInicial);   

    const addAlCart = (disco, quantity) =>{
        const item = {...disco,quantity};/**AGREGA AL OBJETO DISCO LA CANTIDAD A COMPRAR */
        const auxCarrito = [...carrito];
        const enElCarrito = auxCarrito.find((disco) => disco.id === item.id);
    
        if(enElCarrito){
            enElCarrito.quantity += quantity;
            setCarrito(auxCarrito);
        }else{
            setCarrito( [...carrito, item]);
        }
        Swal.fire({ 
          title: 'Agregado al Carrito!',
          icon:'success',
          timer: 2000
        });
       /***setea el arreglo que tiene carrito con la info que ya tenia carrito mas el nuevo item. */
    }
    /**FUNCION PARA EL NUMERO DE ITEMS EN EL CARRITO**/
    const cantidadEnCart = () =>{
      return carrito.reduce((acumulador, disco)=> acumulador+disco.quantity,0);
    }

    const precioTotal = () =>{
      return carrito.reduce((acumulador, disco)=> acumulador + disco.precio*disco.quantity,0)
    }
    const vaciarCarrito = () => {
      Swal.fire({
        title: "Desea eliminar todo el contenido de su carrito?",
        icon: 'question',
        showDenyButton: true,
        confirmButtonColor: 'green',
        confirmButtonText:"Confirmar",
        denyButtonText: "Cancelar",
        denyButtonColor:'red'
      }).then((resultado) =>{
        if(resultado.isConfirmed){
          setCarrito([]);
          Swal.fire({
            title:"Carrito Eliminado",
            icon: 'success',
            timer:2000
          })
        }
      })
    }

    useEffect(()=>{
      localStorage.setItem('carrito', JSON.stringify(carrito))
    },[carrito]);

    return( 
        <CartContext.Provider value={{ carrito, addAlCart, cantidadEnCart, precioTotal,vaciarCarrito }} >
            {children}
        </CartContext.Provider>
    )
}