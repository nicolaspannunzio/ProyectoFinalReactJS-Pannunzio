import { Link } from "react-router-dom";

export const Item = (product) => {


  function containerStyle() {
    return {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      margin: "0 auto",
      padding: "2rem",
      borderRadius: "0.5rem",
    };
  }
  
  const { id, name, price ,description ,img } = product;
  
  return (
    <div style={containerStyle()}>
        <div className="card ">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <img src={img} alt="imagen" style={{maxWidth:"200px"}} />
                <p className="card-text"> {description} </p>
                <Link to={`/item/${id}`}>
                    <button className="btn btn-outline-dark">Detalles</button>
                </Link>
                <p>Precio: $ {price} </p>
                
            </div> 
        </div>
    </div>
  )
}
