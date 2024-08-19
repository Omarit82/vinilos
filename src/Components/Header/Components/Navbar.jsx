import './Navbar.css';
import Button from 'react-bootstrap/Button';

export const Navbar = ({listado}) => {
    return (
        <nav>
            <ul className ='d-flex justify-content-around'>
                {listado.map((item, index) =>(
                    <li className='m-2' key={index}>
                        <Button variant='boton'>{ item }</Button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}