import React from "react";
import { Link } from "react-router-dom";
import { CartItemsContext } from "../../main"
import TopBar from "../top-bar/TopBar";
import style from "./Cart.module.css"

export default function Cart() {

  const {cartItems, setCartItems} = React.useContext(CartItemsContext);

  function modifyItemQuantity(cartItem, operator) {
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems];
      const index = updatedCartItems.findIndex((item) => item.id === cartItem.id);
  
      if (index !== -1) {
        if (operator === "add") {
          updatedCartItems[index].quantity += 1;
        } else if (operator === "subtract") {
          updatedCartItems[index].quantity -= 1;
        }
      }
  
      return updatedCartItems.filter((item) => item.quantity > 0);
    });
  }

  function removeItem(cartItem) {
    setCartItems(prevCartItems => {
      return prevCartItems.filter((item) => item.id !== cartItem.id);
    })
  }

  function showItemsCart() {
    return (
      cartItems.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.description} className={style.img}/>
          <div>
            <h2>{item.title}</h2>
            <h4>{item.price} €</h4>
          </div>
          <div>
            <button onClick={() => modifyItemQuantity(item, "subtract")}>-</button>
            <div role="region" aria-live="assertive">{item.quantity}</div>
            <button onClick={() => modifyItemQuantity(item, "add")}>+</button>
          </div>
          <h2>{item.quantity * item.price} €</h2>
          <button onClick={() => removeItem(item)}>Remove</button>
        </div>
      ))
    );
  }

  console.log(cartItems)

  return (
    <>
      <TopBar />
      {cartItems.length === 0 && 
        <div>
          <h2>Your Cart id empty! Click below to start shopping</h2>
          <Link to={'/shop'}><button>SHOP NOW</button></Link>
        </div>
      }
      {cartItems.length > 0 && 
        <div>
          {showItemsCart()}
          <div>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" ><button>Proceed To Checkout</button></a>
          </div>
        </div>
      }
    </>
  )
}