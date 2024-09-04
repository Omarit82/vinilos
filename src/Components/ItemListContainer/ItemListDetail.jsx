import { ItemCount } from './ItemCount';
import './ItemListDetail.css';


export const ItemListDetail = ( {disco} )=>{
    return(
        <article className="detalle">
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h3 className='text-center mt-3'>{ disco.titulo }</h3> 
                <hr className='linea'/>
                <div>
                    <h4>Autor: { disco.autor }</h4>
                    <h4>Año de salida: { disco.anioRelease }</h4>
                    <h4>Formato: {disco.formato}</h4>
                    <h4>Genero: {disco.genero}</h4>
                </div>              
            </div>
            
            <img src={disco.imagen} alt={disco.titulo} className='imgDisco m-2' />
            <ItemCount />
        </article>
    );
}