import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Header } from "../Components/Header/Header";


function Layout(){
    const arrayNavbar = ['Catalogo', 'Vinilos', 'CDs', 'Ofertas', 'About'];
    return (
        <>
            <Header />
            <Navbar listado = {arrayNavbar}/>
            <Outlet />
        </>
    )
}

export default Layout;