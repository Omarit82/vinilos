import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";


function Layout(){
    const arrayNavbar = ['Catalogo', 'Vinilos', 'CDs', 'Ofertas', 'About'];
    return (
        <>
            <Header />
            <Navbar listado = {arrayNavbar}/>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;