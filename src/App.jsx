import { NavBar, ItemListContainer, ItemDetailContainer, Cart, ItemDetail } from "./Components"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element = { <ItemListContainer  /> } />
        <Route path="/category/:category" element = { <ItemListContainer  /> } />
        <Route path="/item/:id" element = { <ItemDetailContainer />} />
        <Route path="/product/:id" element={<ItemDetail />} />
        <Route path="/cart" element = { <Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;