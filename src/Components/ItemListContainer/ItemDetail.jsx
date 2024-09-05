import './ItemDetail.css';
import { ItemCount } from './ItemCount';

export const ItemDetail = ({ disco })=>{
    
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
                    <h5>Stock disponible: {disco.stock}</h5>
                </div>              
            </div>
            
            <img src={disco.imagen} alt={disco.titulo} className='imgDisco m-2' />
            <ItemCount initial={1} stock={disco.stock} onAdd={(quantity) => console.log('Cantidad Agregada', quantity)}/>
        </article>
    )
}