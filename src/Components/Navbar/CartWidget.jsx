import CartImg from './assets/img/cart.png';


export const CartWidget = () => {
    return (
        <>
            <button className='botonesHeader'><img src={ CartImg } alt="Carrito" className='headerImg' /></button>
            <p className='m-2'>(0)</p>
        </>
    )
}