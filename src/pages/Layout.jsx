import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";


function Layout(){
    const arrayNavbar = ['Vinilos', 'CDs', 'Ofertas'];
    const ordenes = ['Por año de Lanzamiento','Por autor','Por título'];
    return (
        <>
            <Header />
            <Navbar listado = {arrayNavbar} ordenes={ordenes} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;