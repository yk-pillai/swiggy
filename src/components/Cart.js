import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
// import Store from "../utils/Store";

const Cart = () => {
  const cartItems = useSelector((Store)=> Store.cart.items)
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  return (
    <div>
      <button className="p-2 bg-orange-500" onClick={()=>handleClearCart()}>Clear cart</button>
      <div className="flex">
        {cartItems.map((item) => {
          {
            console.log(item);
          }
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
