import { Link } from "react-router-dom";
import CartItemsState from "../cart-items-state/CartItemsState.jsx"

export default function TopBar () {

  const { cartItems} = CartItemsState();

  return (
    <div>
      <div>
        <h1>Shop Name</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart {cartItems.length}</Link>
        </nav>
      </div>
    </div>
  );
}