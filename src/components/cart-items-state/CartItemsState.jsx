import React from "react";

export default function CartItemsState() {

  const [cartItems, setCartItems] = React.useState(["ddd","ccc","jjj","kkk"])

  return { cartItems, setCartItems };

}