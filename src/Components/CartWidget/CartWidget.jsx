import { BsCart } from 'react-icons/bs';

export const CartWidget = () => {
  return (
    <div className='d-flex'>
        <BsCart size={25} /> 
        <p>(0)</p>
    </div>
  )
}
