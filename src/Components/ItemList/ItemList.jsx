import { Item } from "../Item/Item";

export const ItemList = ({products}) => {
  return (
    <>
    <div className="col-md-4 mt-4">
      <div className="row-col-6">
          {products.map (product => <Item key = {product.id} {...product} />)}
      </div>
    </div>
    </>
  )
}
