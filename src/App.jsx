import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Vinilos from "./pages/Vinilos";
import Cds from "./pages/Cds";
import Ofertas from "./pages/Ofertas";
import About from "./pages/About";
import Error from "./pages/Error";
import './App.css';


function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Layout /> }>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/catalogo" element={ <Catalogo /> } />
                    <Route path="/vinilos" element={ <Vinilos /> } />
                    <Route path="/cds" element={ <Cds /> } />
                    <Route path="/ofertas" element={ <Ofertas /> } />
                    <Route path="/about" element={ <About /> } />
                    <Route path="*" element={ <Error /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
