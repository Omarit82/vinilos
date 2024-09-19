import './css/ItemCount.css';


export const ItemCount = ({ cantidad, increment, decrement, handleCart}) =>{

    return (
        <div className="contador">
            <div className="contadorComandos">
                <button className="btn btn-info" onClick={ decrement }> - </button>
                <h4 className="cantidad">{ cantidad }</h4>
                <button className="btn btn-info" onClick={ increment }> + </button>
            </div>
            <div>
                <button className="btn btn-info mb-3" onClick={handleCart} >Add al Cart</button>
            </div>
        </div>
    )

}