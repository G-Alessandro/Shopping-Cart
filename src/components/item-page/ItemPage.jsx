import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CartItemsContext } from "../../main"
import TopBar from "../top-bar/TopBar";
import StarRating from "../star-rating/StarRating";
import AddSvg from "../../assets/svg/add.svg"
import SubtractSvg from "../../assets/svg/subtract.svg"
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

  return (
    <>
      <TopBar />
        <div className={style.container}>
          <img src={item.image} alt={item.description} className={style.itemPageImg}/>

          <div className={style.itemInfoContainer}>
            <h2 className={style.itemTitle}>{item.title}</h2>
              <div className={style.ratingContainer}>
                <StarRating 
                  id={item.id}
                  rate={item.rating.rate}
                />
                {item.rating.count}
              </div>
              <p className={style.itemPrice}>{item.price} €</p>
              <h3 className={style.aboutTitle}>About this item :</h3>
              <p className={style.itemDescription}>{item.description}</p>
          </div>

          <div className={style.quantityContainer}>
            <div className={style.totalContainer}>
              <h2 className={style.totalTitle}>Total :</h2>
              <h2 className={style.total}>{item.price * itemCount} €</h2>
            </div>

            <div className={style.btnItemQuantity}>
              <button className={style.btnSubtract} onClick={() => setItemCount(prevItemCount => prevItemCount > 1 ? prevItemCount - 1 : prevItemCount)}><img src={SubtractSvg} alt="button to decrease the quantity of the chosen item by one"/></button>
              <div role="region" aria-live="assertive" className={style.itemQuantity}>{itemCount}</div>
              <button className={style.btnAdd} onClick={() => setItemCount(prevItemCount => prevItemCount < 99 ? prevItemCount + 1 : prevItemCount)}><img src={AddSvg} alt="button to increase the quantity of the chosen item by one"/></button>
            </div>

            <Link to={"/item-added-page"} state={{item:item}} onClick={() => addItemToCart()} className={style.addToCartBtn}>Add To Cart</Link>
            <Link to={'/cart'} onClick={() => addItemToCart()} className={style.toCheckoutBtn}>Proceed To Checkout</Link>

          </div>

        </div>
        <Link to={'/shop'} className={style.goBackBtn}>Go back to the results</Link>
    </>
  )
}