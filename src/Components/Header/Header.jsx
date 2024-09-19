import { Logo } from './Logo';
import { Titulo } from './Titulo';
import './css/Header.css';

export const Header = () => {
   
    const titulo = 'Tu disquería Online';
    
    return(
        <header className='d-flex'>
            <Logo />
            <Titulo titulo = {titulo} />
        </header>
    );
}