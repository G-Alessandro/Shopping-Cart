import React from "react";
import { Link } from "react-router-dom";
import { CartItemsContext } from "../../main"

export default function TopBar () {

  const {cartItems} = React.useContext(CartItemsContext);
  const [itemsQuantity, setItemsQuantity] = React.useState(0);

  React.useEffect(() => {
    setItemsQuantity(cartItems.reduce((total, item) => total + item.quantity, 0));
  },[cartItems])

  return (
    <div>
      <div>
        <h1>Shop Name</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart {itemsQuantity > 0 && itemsQuantity}</Link>
        </nav>
      </div>
    </div>
  );
}