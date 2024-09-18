import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import './App.css';
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemListContainer/ItemDetailContainer";
import { CompraDetail } from "./Components/ItemListContainer/CompraDetail/CompraDetail";
import { CartContext } from "./context/CartContext";
import { useState } from "react";



function App() {

    const [carrito, setCarrito ] = useState([]);   

    const addAlCart = (disco, quantity) =>{
        const item = {...disco,quantity};/**AGREGA AL OBJETO DISCO LA CANTIDAD A COMPRAR */
        const auxCarrito = [...carrito];
        const enElCarrito = auxCarrito.find((disco) => disco.id === item.id);
    
        if(enElCarrito){
            enElCarrito.quantity += quantity;
            setCarrito(auxCarrito);
        }else{
            setCarrito( [...carrito, item]);
        }
       /***setea el arreglo que tiene carrito con la info que ya tenia carrito mas el nuevo item. */
    }

    const cantidadEnCart = () =>{
        return carrito.reduce((acumulador, producto)=> acumulador+producto.quantity,0);
    }

    return(
        <CartContext.Provider value={{ carrito, addAlCart, cantidadEnCart }} >
            <BrowserRouter>
                <Routes>
                    <Route element={ <Layout /> }>
                        <Route path='/' element={<Home />} />
                        <Route path='/Home' element={<Home />} />
                        <Route exact path='/Catalogo/:categoriaId' element={<ItemListContainer />} />
                        <Route exact path='/Catalogo/Disco/:itemId' element={<ItemDetailContainer />} />
                        <Route exact path='/Checkout' element={<CompraDetail />} />
                        <Route path="*" element={ <Error /> } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartContext.Provider>
    )
}

export default App
