import SearchImg from './assets/img/search.png';

import './Titulo.css';

export const Titulo = ({titulo}) => {
    return (
        <div className='d-flex flex-column flex-md-row justify-content-around align-items-center w-100'>
            <h1 className="text-center ms-md-3 me-md-3 me-0 ms-0 mb-0">{ titulo }</h1>
            <form action="" className='w-md-50 w-75 d-flex'>
                <input type="text" name="busqueda" placeholder=' ...busqueda' className='w-md-75 w-100 me-3' />
                <button type="submit" className='botonesHeader'><img src={ SearchImg } alt="Busqueda" className="headerImg" /></button>
            </form>
        </div>
    )
}