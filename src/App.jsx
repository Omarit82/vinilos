import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Catalogo from "./pages/Catalogo";
import Ofertas from "./pages/Ofertas";
import Vinilos from "./pages/Vinilos";
import './App.css';
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemListContainer/ItemDetailContainer";




function App() {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Layout /> }>
                    <Route path='/home' element={<Home />} />
                    <Route path='/catalogo' element={<Catalogo />} />
                    <Route path='/:categoriaId' element={<ItemListContainer />} />
                    <Route path='/:categoriaId/:itemId' element={<ItemDetailContainer />} />
                    <Route path="*" element={ <Error /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
