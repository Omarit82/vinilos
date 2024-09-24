import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar/NavBar"
import { Cart } from "./components/Cart/Cart"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainter"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { CartProvider } from "./context/CartContext";


const App = ()=>{
  
  return (
    <>
      <CartProvider>
        <Header titulo={'Tu disquería Online'} />
        <Navbar />
        <Routes >
          <Route path='/' element={ <ItemListContainer/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:id' element ={ <ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes> 
        <Footer />
      </CartProvider>
    </>
  )
}

export default App