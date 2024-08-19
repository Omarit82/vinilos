import LogoImg from './assets/img/logo.webp';
import './Logo.css';

export const Logo = () => {
    return (
        <img className="logo m-2" src={ LogoImg } alt="Logo de Vinilos" />
    )
}