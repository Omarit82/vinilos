import CartImg from './assets/img/cart.png';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


export const CartWidget = () => {

    const { cantidadEnCart } = useContext(CartContext);


    return (
        <>
            <img src={ CartImg } alt="Carrito" className='imgCart' />
            <p className='ms-1 mt-3 mb-0'>{ cantidadEnCart() }</p>
        </>
    )
}