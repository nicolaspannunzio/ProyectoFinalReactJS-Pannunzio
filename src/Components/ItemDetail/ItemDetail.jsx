import { ItemCount } from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './ItemDetail.css';

export const ItemDetail = ({ description, img, price, stock, name }) => {
    const { addItem } = useContext(CartContext) ;

    const onAdd = (items) => {
        addItem({
          stock,
          name,
          description,
          img,
          price
        }, items);
    };

  return (
    <div className="border">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <img className= "img-detail" src={img} alt="imagen" />
                <p className="card-text"> {description} </p>
                <p>Precio: {price} </p>
                <ItemCount stock = {stock} onAdd = {onAdd} />
            </div>
        </div>
    </div>
  )
}