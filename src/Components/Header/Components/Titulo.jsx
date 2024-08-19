import SearchImg from './assets/img/search.png';
import { CartWidget } from './CartWidget';

import './Titulo.css';

export const Titulo = ({titulo}) => {
    return (
        <div className='d-flex justify-content-around align-items-center w-100'>
            <h1 className="text-center ms-3 me-3">{ titulo }</h1>
            <form action="" className='w-50'>
                <input type="text" name="busqueda" placeholder=' ...busqueda'className='w-75' />
                <button type="submit" className='botonesHeader'><img src={ SearchImg } alt="Busqueda" className="headerImg ms-2" /></button>
            </form>
            <div className='d-flex'>
                <CartWidget />
            </div>
        </div>
    )
}