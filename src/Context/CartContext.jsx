import React,{ createContext,useContext, useEffect, useState } from "react";
export const CartContext = createContext([]);

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('CartContextProvider');
//   }
//   return context;
// };
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartContextProvider');
  }
  return context;
};

export const CartContextProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (item, quantity) => {
    const { id, name, price } = item;
    const index = cartItems.findIndex((product) => product.id === id);

    if (index !== -1) {
      const cartItemsCopy = [...cartItems];
      cartItemsCopy[index].quantity += quantity;
      cartItemsCopy[index].subTotal = cartItemsCopy[index].quantity * cartItemsCopy[index].price;
      setCartItems(cartItemsCopy);

    } else {
      const newItem = {
        name,
        price,
        quantity,
        subTotal: quantity * price,
      };
      console.log(newItem)
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeItem = (id) => {
    const arrayFilter = cartItems.filter(item => item.id !== id);
    setCartItems(arrayFilter);
  }

  const clearCartItems = () => {
    setCartItems([]);
  }

  const updateItemQuantity = (id, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity, subTotal: newQuantity * item.price } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleTotal = () => {
    const total = cartItems.reduce((acum, item) => acum + item.subTotal, 0);
    setTotalCartItems(total);
  }

  const handleTotalQuantity = () => {
    const total = cartItems.reduce((acum, item) => acum + item.quantity, 0);
    setTotalQuantity(total);
  }

  useEffect(() => {
    handleTotal();
    handleTotalQuantity();
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return <CartContext.Provider value={{ cartItems, totalCartItems, totalQuantity, addItem, removeItem, clearCartItems , updateItemQuantity }}> {children} </CartContext.Provider>;
};


