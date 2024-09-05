import { getDiscos } from "../getData";
import { useState, useEffect } from "react";
import DiscoImg from "../Components/assets/img/disco.png";
import Disco1 from '../Components/assets/img/dsc1.png';
import Disco2 from '../Components/assets/img/dsc2.png';
import Disco3 from '../Components/assets/img/dsc3.png';
import Disco4 from '../Components/assets/img/dsc4.png';
import './Home.css';
import { ItemList } from "../Components/ItemListContainer/ItemList";


function Home(){
    const mensaje = 'Bienvenidos!';
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getDiscos()
            .then(response => {
                
                setProductos(response);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    return (
        <>
            <main className="d-flex justify-content-center align-items-center flex-column">
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <img src={ DiscoImg } alt="disco"  className="disco m-3" />
                    <h2>{mensaje}</h2>
                    <img src={ DiscoImg } alt="disco"  className="disco m-3" />
                </div>
                <div className="d-flex flex-column mt-5">
                    <img className="coverDisco" src={ Disco1 } alt="disco" />
                    <img className="coverDisco" src={ Disco2 } alt="disco" />
                    <img className="coverDisco" src={ Disco3 } alt="disco" />
                    <img className="coverDisco" src={ Disco4 } alt="disco" />
                </div>
                <h2 className="mt-5 mb-5">Catalogo</h2>
                <div>
                    <ItemList productos={productos} />
                </div>
            </main>    
        </>
    )
}

export default Home;