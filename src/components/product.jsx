import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { clear, deleteFromcart } from '../rtk/cart-slice';
function Product() {
  const cart = useSelector(state=>state.cart);
  const dispatch=useDispatch();
  const totalPrice=cart.reduce((acc,product)=>{
    acc+=product.price*product.quantity;
    return acc;
  },0)
  return (
    <>
    <div className='container p-3 mt-5 pt-3'>
    <Button variant="primary mt-5" onClick={()=>{dispatch(clear())}}>clear all</Button>
    <Table className='mt-5' striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>produt title</th>
          <th>description</th>
          <th>price</th>
          <th>quantity</th>
          <th>image</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((product)=>(
          <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td>{product.description}</td>
          <td>{product.price}$</td>
          <td>{product.quantity}</td>
          <td><img src={product.image} style={{width:"200px",height:"100px"}} alt={product.title} /></td>
          <td><Button variant='danger' onClick={()=>{dispatch(deleteFromcart(product))}}>delete</Button></td>
        </tr>
        ))}
      </tbody>
    </Table>

    <h3>total price :{totalPrice}</h3>
    
    </div>
    </>
  );
}

export default Product;