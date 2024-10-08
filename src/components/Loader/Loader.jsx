import { useEffect } from "react";
import disco from "./assets/img/disco.png";
import './style.css'

export const Loader = ()  => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth" // Hace que el desplazamiento sea suave
        });
    };
    useEffect(()=>{
        scrollToTop();
    })
    return(
        <main>
            <div className="d-flex flex-column justify-content-start align-items-center vh-100">
                <h1>Loading...</h1>
                <img src={disco} alt="" className="spinner-border spinner mt-5" />
            </div>
        </main>
    )
}