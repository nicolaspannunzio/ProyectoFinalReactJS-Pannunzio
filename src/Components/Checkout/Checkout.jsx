import { useContext, useState } from "react"
import { FirebaseContext } from "../../Context/FirebaseContext";
import { CartContext } from "../../context/CartContext";

export const Order = () => {

  const { cartItems, totalCartItems } = useContext(CartContext);
  const { addOrderDB } = useContext(FirebaseContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  // Guardar una orden de compra 
  const handleForm = (e) => {
    e.preventDefault()
    try {
      addOrderDB(cartItems, { name, email }, totalCartItems);
      setName("");
      setEmail("");
    } catch (error) {
      console.log(error)
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "nombre") {
      setName(value);
    } else if (name === "mail") {
      setEmail(value);
    } else if (name === "mailRepeat") {
    }
  };

  return (

    <form className="mb-3" onSubmit={handleForm} >
      <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" onChange={handleInputChange} value={name} name="nombre" onSubmit={handleForm} />
      <input type="text" className="form-control" id="mail" placeholder="Ingrese su mail" onChange={handleInputChange} value={email} name="mail" onSubmit={handleForm} />
      {/* <input type="text"className="form-control" id="mailRepeat" placeholder="Repita su mail" name="mailRepeat" onSubmit={handleForm}/> */}
      <button type="submit" className="btn btn-primary">Comprar</button>
    </form>
  )
}