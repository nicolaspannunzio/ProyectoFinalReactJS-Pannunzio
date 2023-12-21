import { useEffect, useState } from "react";
import { collection, doc, getDocs, query, updateDoc , where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import {discountStock} from "../Context/FirebaseContext";
import { CartContext } from "../Context/CartContext";
export const Products = () => {

  const { totalQuantity } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);

  const getProductsDB = (category) => {
    const myProducts = category ?
      query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));
    getDocs(myProducts).then((resp) => {
      if (resp.size === 0) {
        console.log("No hay productos en la base de datos");
      }
      const productList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(productList);
      setIsLoading(false);
    });
  };

  const getProductById = (id) => {
    const productRef = doc(db, "products", id);
    getDocs(productRef)
      .then(resp => {
        if (resp.exists()) {
          const prod = {
            id: resp.id,
            ...resp.data()
          }
          setProduct(prod);
        }
      })
  }

  useEffect(() => {
    setIsLoading(true);
    getProductsDB();
    getProductById();
    //seedProducts();
  }, []);

  return (
    <>
      <h2>Productos</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>Nombre: {product.name}</p>
          <p>Precio: {product.price}</p>
          <p>Descripción: {product.description}</p>
          <p>Stock: {product.stock}</p>
          <button onClick={() => discountStock(product)}>Comprar</button>
        </div>
      ))}
    </>
  );
};