import { Outlet, Link } from 'react-router-dom';  
import { useCartStore } from '../store/useCartStore';  
import { useMemo } from 'react';  
import Button from '../components/Button';  
  
export default function Cart() {  
  const cartItems = useCartStore((state) => state.cartItems);  
  const removeFromCart = useCartStore((state) => state.removeFromCart);  
  
  // useMemo: derived state, recalculated only when cartItems changes  
  const totalPrice = useMemo(  
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),  
    [cartItems]  
  );  
  
  return (  
    <div className="page">  
      <h2>Your Cart</h2>  
  
      {cartItems.length === 0 ? (  
        <p>Your cart is empty. Go add something, Mahesh!</p>  
      ) : (  
        <>  
          {cartItems.map((item) => (  
            <div key={item.id} className="cart-item">  
              <span>{item.name} x {item.quantity}</span>  
              <div className="cart-item-actions">  
                <span>₹{item.price * item.quantity}</span>  
                <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>  
              </div>  
            </div>  
          ))}  
  
          <p className="cart-total">Total: ₹{totalPrice}</p>  
          <Link to="/cart/checkout">  
            <Button>Proceed to Checkout</Button>  
          </Link>  
        </>  
      )}  
  
      {/* the nested /cart/checkout route renders here */}  
      <Outlet />  
    </div>  
  );  
}  