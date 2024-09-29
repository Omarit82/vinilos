import {createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext();

const carritoInicial = (JSON.parse(localStorage.getItem('carrito')) || []);

export const CartProvider = ({children}) =>{
    const [ carrito, setCarrito ] = useState(carritoInicial);   
    const [ empty, setEmpty ] = useState(true);

    /**FUNCION QUE AGREGA AL CARRITO EL DISCO Y LA CANTIDAD SELECCIONADA */
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
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Agregado al carrito"
        })
        .then(
            window.scrollTo({
              top: 0,
              behavior: "smooth" // Hace que el desplazamiento sea suave
            })
        )
        
       /***setea el arreglo que tiene carrito con la info que ya tenia carrito mas el nuevo item. */
    }
    /**FUNCION PARA EL NUMERO DE ITEMS EN EL CARRITO**/
    const cantidadEnCart = () =>{
      return carrito.reduce((acumulador, disco)=> acumulador+disco.quantity,0);
    }
    /**FUNCION QUE DEVUELVE EL PRECIO TOTAL DEL CARRITO */
    const precioTotal = () =>{
      return carrito.reduce((acumulador, disco)=> acumulador + disco.precio*disco.quantity,0)
    }
    /**FUNCION QUE SETEA EN CERO EL CARRITO */
    const cartReset = () => {
      setCarrito([]);
      setEmpty(true);
    }
    /**FUNCION PARA VACIAR EL CARRITO */
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
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Carrito eliminado"
          })
          .then(
            window.scrollTo({
              top: 0,
              behavior: "smooth" // Hace que el desplazamiento sea suave
            })
          )
        }
      })
    }
    /**FUNCION QUE ELIMINA UN ITEM DEL CARRITO POR SU ID */
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
          const resultado = carrito.filter(disco => disco.id !== id);
          if(resultado.length === 0){
            setEmpty(true);
          }
          setCarrito(resultado);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Producto Eliminado"
          })
          .then(
            window.scrollTo({
              top: 0,
              behavior: "smooth" // Hace que el desplazamiento sea suave
            })
          )
        }
      })
    }
    /**ACTUALIZA EL CARRITO EN EL LOCALSTORAGE */
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