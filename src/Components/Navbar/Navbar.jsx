import './css/Navbar.css';
import { CartWidget } from './CartWidget';
import { Link } from "react-router-dom";


export function Navbar({listado, ordenes}){
    
    
    function handleclick(ind){
        
    }
    return (
        <nav>
            <ul className ='d-flex justify-content-around align-items-center'>
                {
                    listado.map((item, index) =>(
                        <li className='mt-2 btn-boton p-2' key={index}>
                            <Link to={`Catalogo/${item}`}>{ item }</Link>
                        </li>
                    ))
                }
                 <div className='d-flex'>
                    <CartWidget />
                </div>
            </ul>
            <ul className ='d-flex justify-content-around align-items-center'>
                {
                    ordenes.map((item, index) => (
                        <li className="m-1" key={index}>
                            <button className='btn-boton btn activo' onClick={()=>handleclick(index)}>{item}</button>:
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
