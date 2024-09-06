import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import './App.css';
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemListContainer/ItemDetailContainer";




function App() {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route element={ <Layout /> }>
                    <Route path='/' element={<Home />} />
                    <Route path='/Home' element={<Home />} />
                    <Route exact path='/Catalogo/:categoriaId' element={<ItemListContainer />} />
                    <Route exact path='/Catalogo/Disco/:itemId' element={<ItemDetailContainer />} />
                    <Route path="*" element={ <Error /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
