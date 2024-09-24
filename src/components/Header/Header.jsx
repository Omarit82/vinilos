import { Link } from 'react-router-dom';
import LogoImg from './assets/img/logo.webp';
import SearchImg from './assets/img/search.png';
import './style.css';

export const Header = ({titulo}) => {
   
    
    return(
        <header className='d-flex'>
            <Link to="/">
                <img className="logo m-2" src={ LogoImg } alt="Logo de Vinilos" />
            </Link>
            <div className='d-flex flex-column flex-md-row justify-content-around align-items-center w-100'>
                <h1 className="text-center ms-3 me-3 fs-md-4 fs-5">{ titulo }</h1>
                <form action="" className='w-md-50 w-75 d-flex m-1 m-md-2'>
                    <input type="text" name="busqueda" placeholder=' ...busqueda' className='w-md-75 w-100 me-3' />
                    <button type="submit" className='botonesHeader'><img src={ SearchImg } alt="Busqueda" className="headerImg" /></button>
                </form>
            </div>
        </header>
    );
}