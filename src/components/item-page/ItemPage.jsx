import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CartItemsContext } from "../../main"
import TopBar from "../top-bar/TopBar";
import style from "./ItemPage.module.css";

export default function ItemPage() {

  const location = useLocation();
  const item = location.state?.item;
  const [itemCount, setItemCount] = React.useState(1);
  const {cartItems, setCartItems} = React.useContext(CartItemsContext);

  function addItemToCart() {
    const itemToBuy = item;
    itemToBuy.quantity = itemCount;

    if(itemCount > 0) {
      if (!cartItems.some((cartItem) => cartItem.id === itemToBuy.id)) {
        setCartItems((prevCartItems) => [...prevCartItems, itemToBuy]);
      } else {
        setCartItems((prevCartItems) =>
          prevCartItems.map((cartItem) =>
            cartItem.id === itemToBuy.id ? { ...cartItem, quantity: itemCount } : cartItem
          )
        );
      }
    } else {
      setCartItems((prevCartItems) =>
          prevCartItems.filter((cartItem) => cartItem.quantity !== 0)
      );
    }
  }

  console.log("cartItems in ItemPage", cartItems)

  return (
    <div>
      <TopBar />
      <Link to={'/shop'}><button>Back</button></Link>
      <img src={item.image} alt={item.description} className={style.img}/>
      <div>
        <h2>{item.title}</h2>
        <span>{item.rating.rate} {item.rating.count}</span>
        <span>{item.price} €</span>
        <p>{item.description}</p>
        <div>
          <button onClick={() => setItemCount(prevItemCount => prevItemCount > 0 ? prevItemCount - 1 : prevItemCount)}>-</button>
          <div role="region" aria-live="assertive">{itemCount}</div>
          <button onClick={() => setItemCount(prevItemCount => prevItemCount + 1)}>+</button>
        </div>
        <button onClick={() => addItemToCart()}>Add To Cart</button>
        <button>Proceed To Checkout</button>
      </div>
    </div>
  )
}