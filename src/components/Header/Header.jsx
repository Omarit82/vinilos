import { Link } from 'react-router-dom';
import LogoImg from './assets/img/logo.webp';
import './style.css';
import { SearchContext } from '../../context/SearchContext'
import { useContext } from 'react';
import UserIcon from './assets/img/user.png';
import { UserContext } from '../../context/UserContext';
import { CartContext } from '../../context/CartContext';


export const Header = ({titulo}) => {

    const { handleSearch } = useContext(SearchContext);
    const { user, handleLogout } = useContext(UserContext);
    const { cartReset } = useContext(CartContext);
    
    const logout = ()=>{
        handleLogout();
        cartReset();
    }
    return(
        <header className='d-flex'>
            <Link to="/">
                <img className="logo m-2" src={ LogoImg } alt="Logo de Vinilos" />
            </Link>
            <div className='d-flex flex-column flex-md-row justify-content-around align-items-center w-100'>
                <h1 className="text-center ms-3 me-3 titulo">{ titulo }</h1>
                <div className='d-flex align-items-center justify-content-between'>
                    <form  className='busqueda d-flex m-1 m-md-2 align-items-center'>
                        <input onChange={(e)=>{handleSearch(e.target.value)}} type="text" name="busqueda" placeholder=' ...busqueda' className='w-md-75 w-100 me-3 busquedaInput' />
                    </form>
                    <div className='d-flex'>
                        <Link to='/login' className='userContainer'><img className='user' src={UserIcon} alt="Icono de usuario" /></Link>
                            {
                                (Object.keys(user).length > 0 ) ? 
                                <div className='contenedorUsuario'>
                                    <p className='usuario'>{user.user.displayName}</p>
                                    <button className='botonLogin' onClick={logout}>Log out</button>
                                </div> : 
                                <div className='contenedorUsuario'>
                                    <p className='botonLogout'>Login!</p>
                                </div>
                            }
                    </div>
                </div>
            </div>
        </header>
    );
}