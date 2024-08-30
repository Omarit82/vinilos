import { Logo } from './Components/Logo';
import { Titulo } from './Components/Titulo';
import './Header.css';

export const Header = () => {
   
    const titulo = 'Tu disquería Online';
    
    return(
        <header className='d-flex'>
            <Logo />
            <Titulo titulo = {titulo} />
        </header>
    );
}