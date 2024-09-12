import { getDiscosByCategory } from "../getData";
import { useState, useEffect } from "react";
import DiscoImg from "../Components/assets/img/disco.png";
import Disco1 from '../Components/assets/img/dsc1.png';
import Disco2 from '../Components/assets/img/dsc2.png';
import Disco3 from '../Components/assets/img/dsc3.png';
import Disco4 from '../Components/assets/img/dsc4.png';
import Disco5 from '../Components/assets/img/dsc10.png';
import Disco6 from '../Components/assets/img/dsc11.png';
import Disco7 from '../Components/assets/img/dsc12.png';
import Disco8 from '../Components/assets/img/dsc13.png';
import Disco9 from '../Components/assets/img/dsc14.png';
import Disco10 from '../Components/assets/img/dsc15.png';
import Disco11 from '../Components/assets/img/dsc16.png';
import Disco12 from '../Components/assets/img/dsc17.png';
import Disco13 from '../Components/assets/img/dsc18.png';
import Disco14 from '../Components/assets/img/dsc19.png';
import Disco15 from '../Components/assets/img/dsc20.png';
import './Home.css';
import { ItemList } from "../Components/ItemListContainer/ItemList";


function Home(){
    const mensaje = 'Bienvenidos!';
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        getDiscosByCategory()
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
                <div className="d-flex w-75">
                    <div className="d-flex flex-column justify-content-center align-items-center mt-5 col-2">
                        <img className="coverDisco" src={ Disco1 } alt="disco" />
                        <img className="coverDisco" src={ Disco2 } alt="disco" />
                        <img className="coverDisco" src={ Disco3 } alt="disco" />
                        <img className="coverDisco" src={ Disco4 } alt="disco" />
                        
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center mt-5 col-2">
                        <img className="coverDisco" src={ Disco5 } alt="disco" />
                        <img className="coverDisco" src={ Disco6 } alt="disco" />
                        <img className="coverDisco" src={ Disco7 } alt="disco" />
                        <img className="coverDisco" src={ Disco8 } alt="disco" />
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center mt-5 col-2">
                        <img className="coverDisco" src={ Disco9 } alt="disco" />
                        <img className="coverDisco" src={ Disco10 } alt="disco" />
                        <img className="coverDisco" src={ Disco11 } alt="disco" />
                        <img className="coverDisco" src={ Disco12 } alt="disco" />
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center mt-5 col-2">
                        <img className="coverDisco" src={ Disco13 } alt="disco" />
                        <img className="coverDisco" src={ Disco14 } alt="disco" />
                        <img className="coverDisco" src={ Disco15 } alt="disco" />
                        <img className="coverDisco" src={ Disco1} alt="disco" />
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center mt-5 col-2">
                        <img className="coverDisco" src={ Disco5 } alt="disco" />
                        <img className="coverDisco" src={ Disco6 } alt="disco" />
                        <img className="coverDisco" src={ Disco7 } alt="disco" />
                        <img className="coverDisco" src={ Disco8 } alt="disco" />
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center mt-5 col-2">
                        <img className="coverDisco" src={ Disco9 } alt="disco" />
                        <img className="coverDisco" src={ Disco10 } alt="disco" />
                        <img className="coverDisco" src={ Disco11 } alt="disco" />
                        <img className="coverDisco" src={ Disco12 } alt="disco" />
                    </div>
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