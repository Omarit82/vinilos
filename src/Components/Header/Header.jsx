import { Logo } from './Components/Logo';
import { Titulo } from './Components/Titulo';
import { Navbar } from './Components/Navbar';
import './Header.css';

export const Header = () => {
    const arrayNavbar = ['Catalogo', 'Vinilos', 'CDs', 'Ofertas', 'Quienes somos'];
    const titulo = 'Tu disquería Online';
    return(
        <header className='d-flex'>
            <Logo />
            <div className='w-100'>
                <Titulo titulo = {titulo} />
                <Navbar listado = {arrayNavbar} />
            </div>
        </header>
    );
}