import { Link } from "react-router-dom"


export const Item = ( {item} ) => {
    return (
        <article className="tarjeta">
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h3 className='text-center mt-3'>{ item.titulo }</h3> 
                <h4>{ item.autor }</h4>
                <h4 className="fs-5">{ item.anioRelease }</h4>
                <div className="d-flex"><p>{item.Formato[0]}</p>
                {item.Formato[1]&&<p>-{item.Formato[1]}</p>}
                </div>
            </div>
            <img src={item.imagen} alt={item.titulo} className='imgDisco m-1' />
            <Link to={`/detail/${item.id}`} className='btn btn-info mb-4'>Mas Info</Link>
        </article>        
    )
}