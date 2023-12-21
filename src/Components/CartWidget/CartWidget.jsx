import { BsCart } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';


export const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  const quantityToShow = isNaN(totalQuantity) ? 0 : totalQuantity;

  return (
    <Link to="/cart">
      <div>
        <BsCart size={25} />
        <span>{ quantityToShow }</span>
      </div>
    </Link>
  );
};