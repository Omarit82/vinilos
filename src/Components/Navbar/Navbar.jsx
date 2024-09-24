import './style.css';
import { NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const Navbar = () => {
    return(
        <nav className='navBar'>
            <NavLink className="navButton" to={'/'}>Home</NavLink>
            <NavLink className="navButton" to={'/category/Ofertas'}>Ofertas</NavLink>
            <NavLink className="navButton" to={'/category/Vinilos'}>Vinilos</NavLink>
            <NavLink className="navButton" to={'/category/CDs'}>Cd's</NavLink>
            <NavLink className="cart d-flex" to={'/cart'}><CartWidget /></NavLink>
        </nav>
    )
}