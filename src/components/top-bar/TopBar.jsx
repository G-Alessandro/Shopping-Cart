import React from "react";
import { Link } from "react-router-dom";
import { CartItemsContext } from "../../main";
import CartSvg from "../../assets/svg/cart.svg"
import style from "./TopBar.module.css";

export default function TopBar () {

  const {cartItems} = React.useContext(CartItemsContext);
  const [itemsQuantity, setItemsQuantity] = React.useState(0);

  React.useEffect(() => {
    setItemsQuantity(cartItems.reduce((total, item) => total + item.quantity, 0));
  },[cartItems])

  return (
      <div className={style.mainContainer}>
        <Link to="/" className={style.shopName}>GlamGrove</Link>
        <nav className={style.navContainer}>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart" className={style.cartLink}>
            Cart 
            <img src={CartSvg} />
            <div className={style.itemsNumber}>
              {itemsQuantity > 0 && itemsQuantity}
            </div>
          </Link>
        </nav>
      </div>
  );
}