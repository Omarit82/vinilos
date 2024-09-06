import './Navbar.css';
import { CartWidget } from './CartWidget';
import { Link } from "react-router-dom";

export function Navbar({listado}){
    return (
        <nav>
            <ul className ='d-flex justify-content-around align-items-center'>
                {listado.map((item, index) =>(
                    
                    <li className='m-2 btn-boton p-2' key={index}>
                        <Link to={`Catalogo/${item}`}>{ item }</Link>
                    </li>
                ))}
                 <div className='d-flex'>
                    <CartWidget />
                </div>
            </ul>
        </nav>
    )
}
