import DiscoImg from "../Components/assets/img/disco.png";
import Disco1 from '../Components/assets/img/dsc1.png';
import Disco2 from '../Components/assets/img/dsc2.png';
import Disco3 from '../Components/assets/img/dsc3.png';
import Disco4 from '../Components/assets/img/dsc4.png';
import './Home.css';


function Home(){
    const mensaje = 'Bienvenidos!';
    console.log('aca');
    return (
        <>
            <main className="d-flex justify-content-center align-items-center flex-column vh-100">
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
            </main>    
        </>
    )
}

export default Home;