import React from "react";
import { Link } from "react-router-dom";
import { CartItemsContext } from "../../main"
import TopBar from "../top-bar/TopBar";
import AddSvg from "../../assets/svg/add.svg"
import SubtractSvg from "../../assets/svg/subtract.svg"
import style from "./Cart.module.css"

export default function Cart() {

  const {cartItems, setCartItems} = React.useContext(CartItemsContext);

  function modifyItemQuantity(cartItem, operator) {
    setCartItems((prevCartItems) => {
      const updatedCartItems = [...prevCartItems];
      const index = updatedCartItems.findIndex((item) => item.id === cartItem.id);
  
      if (index !== -1) {
        if (operator === "add" && updatedCartItems[index].quantity < 99) {
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

  function totalElements() {
    let total = 0;
    cartItems.map((item) => total += item.quantity);
    return total;
  }

  function itemTotalPrice(cartItem) {
    let total = (cartItem.quantity * cartItem.price).toFixed(2);
    if(total % 1 === 0) {
      return (cartItem.quantity * cartItem.price).toFixed(0);
    }
    return total;
  }

  function estimatedTotal() {
    let total = 0;
    cartItems.map((item) => total += item.quantity * item.price);
    if(total % 1 === 0) {
      return total.toFixed(0);
    }
    return total.toFixed(2);
  }

  function showItemsCart() {
    return (
      cartItems.map(item => (
        <div key={item.id} className={style.itemContainer}>
          <div className={style.cartItemImgContainer}>
            <img src={item.image} alt={item.description} className={style.cartItemImg}/>
          </div>
          <div className={style.cartItemInfo}>
            <h2 className={style.cartItemTitle}>{item.title}</h2>
            <div className={style.quantityBtnPrice}>
              <div className={style.btnItemQuantity}>
                <button onClick={() => modifyItemQuantity(item, "subtract")} className={style.btnSubtract}><img src={SubtractSvg} alt="button to decrease the quantity of the chosen item by one"/></button>
                <div role="region" aria-live="assertive" className={style.itemQuantity}>{item.quantity}</div>
                <button onClick={() => modifyItemQuantity(item, "add")} className={style.btnAdd}><img src={AddSvg} alt="button to increase the quantity of the chosen item by one"/></button>
              </div>
              <p className={style.total}>{itemTotalPrice(item)} €</p>
            </div>
          </div>
          <div className={style.priceRemoveBtnContainer}>
            <h2 className={style.cartItemPrice}>{item.price} €</h2>
            <button onClick={() => removeItem(item)} className={style.removeBtn}>Remove</button>
          </div>
        </div>
      ))
    );
  }

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
          <div className={style.cartContainer}>
            <div className={style.cartItemContainer}>
              <div className={style.cartItemCount}>
                <h2>Your shopping cart</h2>
                <h2>{totalElements()} {totalElements() > 1 ? "items" : "item"}</h2>
              </div>
              {showItemsCart()}
            </div>
            <div className={style.checkoutContainer}>
              <div className={style.estimateTotalContainer}>
                <h2>Estimated total :</h2>
                <h2>{estimatedTotal()} €</h2>
              </div>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer" className={style.checkoutLink}>Proceed To Checkout</a>
            </div>
          </div>
        }
    </>
  )
}