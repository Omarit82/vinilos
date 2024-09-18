import { Link } from 'react-router-dom';
import CartImg from './assets/img/cart.png';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


export const CartWidget = () => {

    const { cantidadEnCart } = useContext(CartContext);

    return (
        <>
            <button className='botonesHeader'><Link to={`Checkout/`}><img src={ CartImg } alt="Carrito" className='headerImg' /></Link></button>
            <p className='m-2'>{ cantidadEnCart() }</p>
        </>
    )
}