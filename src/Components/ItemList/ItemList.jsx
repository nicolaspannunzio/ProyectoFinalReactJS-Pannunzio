import { Item } from "../Item/Item";

export const ItemList = ({products}) => {
console.log(products)



  return (
    <>
    <div className="col-md-4 mt-4"  style={{maxWidth:"1000px"}}>
      <div className="row-col-6">
          {products.map(product => <Item key = {product.id} {...product} />)}
      </div>
    </div>
    </>
  )
}