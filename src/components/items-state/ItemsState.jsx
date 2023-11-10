import React from "react";

export default function ItemsState() {

  const [items, setItems] = React.useState([]);

  return { items, setItems };

}