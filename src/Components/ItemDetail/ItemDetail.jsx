import { ItemCount } from "../ItemCount/ItemCount";
import styles from "../ItemDetail/ItemDetail.module.css";

export const ItemDetail = ({ description, img, price, stock, name}) => {

    const onAdd = (items) => {
        alert (`Se agregaron ${items} al carrito`);
    }

  return (
    <div className="border">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <img src={img} alt="imagen" />
                <p className="card-text"> {description} </p>
                <p>Precio: {price} </p>
                <ItemCount stock = {stock} onAdd = {onAdd} />
            </div>
        </div>
    </div>
  )
}