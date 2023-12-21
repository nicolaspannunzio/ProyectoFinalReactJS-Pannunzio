import { NavBar, ItemListContainer,ItemDetailContainer, Cart, ItemDetail, Order} from "./Components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { FirebaseContextProvider } from "./Context/FirebaseContext";
export const App = () => {
  return (
    <BrowserRouter>
    <FirebaseContextProvider>
      <CartContextProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/product/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/confirmar-compra" element={<Order />} />
          </Routes>
      </CartContextProvider>
      </FirebaseContextProvider>
    </BrowserRouter>
  );
};

export default App;