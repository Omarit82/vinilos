import { Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainter";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { CartProvider } from "./context/CartContext";
import { NavBar} from "./components/Navbar/NavBar";
import { CheckOut } from "./components/Cart/CheckOut";
import { SearchProvider } from "./context/SearchContext";
import { Login } from "./components/Sesion/Login";
import { UserProvider } from "./context/UserContext";
import { Registro } from "./components/Sesion/Registro";

const App = ()=>{
  
  return (
    <>
      <UserProvider>
        <CartProvider>
          <SearchProvider>
            <Header titulo={'Tu disquería Online'} />
            <NavBar />
            <Routes >
              <Route path='/' element={ <ItemListContainer/>} />
              <Route path='/login' element={ <Login />} />
              <Route path='/registro' element={ <Registro />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:id' element ={ <ItemDetailContainer />} />
              <Route path='/checkout' element = {<CheckOut />} />
              <Route path='/cart' element={<Cart />} />
            </Routes> 
            <Footer />
          </SearchProvider>
        </CartProvider>
      </UserProvider>
    </>
  )
}

export default App