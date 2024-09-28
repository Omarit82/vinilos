import {createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext();

const carritoInicial = (JSON.parse(localStorage.getItem('carrito')) || []);

export const CartProvider = ({children}) =>{
    const [ carrito, setCarrito ] = useState(carritoInicial);   
    const [ empty, setEmpty ] = useState(true);

    const addAlCart = (disco, quantity) =>{
        const item = {...disco,quantity};/**AGREGA AL OBJETO DISCO LA CANTIDAD A COMPRAR */
        const auxCarrito = [...carrito];
        const enElCarrito = auxCarrito.find((disco) => disco.id === item.id);
        setEmpty(false);
    
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

    const cartReset = () => {
      setCarrito([]);
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
          setEmpty(true);
          Swal.fire({
            title:"Carrito Eliminado",
            icon: 'success',
            timer:2000
          })
        }
      })
    }

    const eliminarItem = (id) =>{
      Swal.fire({
        title: '¿Desea eliminar el producto?',
        icon: 'question',
        showDenyButton: true,
        confirmButtonColor: 'green',
        confirmButtonText:"Confirmar",
        denyButtonText: "Cancelar",
        denyButtonColor:'red'
      }).then((resultado) =>{
        if(resultado.isConfirmed){
          setCarrito(carrito.filter( disco => disco.id !== id));
          Swal.fire({
            title: 'Producto eliminado!',
            icon: 'success',
            timer:2000
          })
        }
      })
      
    }

    useEffect(()=>{
      localStorage.setItem('carrito', JSON.stringify(carrito));
    },[carrito]);

    const values = {
      carrito,
      addAlCart,
      cantidadEnCart,
      precioTotal,
      vaciarCarrito,
      eliminarItem,
      cartReset,
      empty
    }

    return( 
        <CartContext.Provider value={values} >
            {children}
        </CartContext.Provider>
    )
}