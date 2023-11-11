import React from "react";
import { Link, useLocation } from "react-router-dom";
import TopBar from "../top-bar/TopBar";
import CartItemsState from "../cart-items-state/CartItemsState.jsx"

export default function ItemPage() {

  const location = useLocation();
  const item = location.state?.item;
  const [itemCount, setItemCount] = React.useState(1);
  const {cartItems, setCartItems} = CartItemsState();

  function addItemToCart() {
    const itemToBuy = item;
    itemToBuy.quantity = itemCount;

    if (!cartItems.some((cartItem) => cartItem.id === itemToBuy.id)) {
      setCartItems((prevCartItems) => [...prevCartItems, itemToBuy]);
    } else {
      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === itemToBuy.id ? { ...cartItem, quantity: itemCount } : cartItem
        )
      );
    }
  }

  console.log(cartItems)

  return (
    <div>
      <TopBar />
      <Link to={'/shop'}><button>Back</button></Link>
      <img src={item.image} alt={item.description} />
      <div>
        <h2>{item.title}</h2>
        <span>{item.rating.rate} {item.rating.count}</span>
        <span>{item.price} €</span>
        <p>{item.description}</p>
        <div>
          <button onClick={() => setItemCount(prevItemCount => prevItemCount - 1)}>-</button>
          <div role="region" aria-live="assertive">{itemCount}</div>
          <button onClick={() => setItemCount(prevItemCount => prevItemCount + 1)}>+</button>
        </div>
        <button onClick={() => addItemToCart()}>Add To Cart</button>
        <button>Proceed To Checkout</button>
      </div>
    </div>
  )
}