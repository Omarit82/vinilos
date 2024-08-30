import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar({listado}){
    return (
        <nav>
            <ul className ='d-flex justify-content-around'>
                {listado.map((item, index) =>(
                    <li className='m-2' key={index}>
                        <Link to={item}>{ item }</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;