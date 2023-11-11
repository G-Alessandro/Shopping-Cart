import React from "react";

export default function CartItemsState() {

  const [cartItems, setCartItems] = React.useState([])

  return { cartItems, setCartItems };

}