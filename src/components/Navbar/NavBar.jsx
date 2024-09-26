import './style.css';
import { NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
    return(
        <nav className='navBar'>
            <NavLink className="navButton" to={'/'}>Home</NavLink>
            <NavLink className="navButton" to={'/category/Ofertas'}>Ofertas</NavLink>
            <NavLink className="navButton" to={'/category/Pop'}>Pop</NavLink>
            <NavLink className="navButton" to={'/category/Rock'}>Rock</NavLink>
            <NavLink className="navButton" to={'/category/Clasica'}>Clasica</NavLink>
            <NavLink className="navButton" to={'/category/Tango'}>Tango</NavLink>
            <NavLink className="d-flex ms-2 mb-1" id="cart" to={'/cart'}><CartWidget /></NavLink>
        </nav>
    )
}