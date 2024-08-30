import LogoImg from './assets/img/logo.webp';
import './Logo.css';
import { Link } from 'react-router-dom';

export const Logo = () => {
    return (
        <Link to="Catalogo">
            <img className="logo m-2" src={ LogoImg } alt="Logo de Vinilos" />
        </Link>
    )
}