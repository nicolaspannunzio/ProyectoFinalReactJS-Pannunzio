import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, totalCartItems, removeItem} = useContext(CartContext);
  console.log(cartItems)

  const handleConfirmOrder = () => {
    if (cartItems.length === 0) {
      alert("Revisa tu compra, carrito vacío");
    } else {
      navigate("/confirmar-compra");
    }
  };
  
  return (
    <div className="box">
      <h2>Carrito</h2>
      <div>
        {cartItems.map((item,index) => (
          <div className="minibox" key={index}>
            <p>Nombre: {item.name}</p>
            <p>Precio Unitario: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Sub total: ${item.subTotal}</p>
            <button onClick={() => removeItem(item.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <p>Suma total del carrito ${totalCartItems}</p>

      <button onClick={handleConfirmOrder}>Confirmar Compra</button>
    </div>
  );
};