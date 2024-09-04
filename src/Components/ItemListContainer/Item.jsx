import './Item.css';
import { Link } from 'react-router-dom';

export const Item = ( {disco} ) => {

    return(
        
        <article className="tarjeta">
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h3 className='text-center mt-3'>{ disco.titulo }</h3> 
                <h4>{ disco.autor }</h4>
                <h4>{ disco.anioRelease }</h4>
            </div>
            <img src={disco.imagen} alt={disco.titulo} className='imgDisco m-2' />
            <Link to={`/catalogo/${disco.id}`} className='btn btn-success mb-4'>Mas Info</Link>
        </article>
    )
}