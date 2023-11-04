import React from "react";
import TopBar from "../top-bar/TopBar";
import ItemsFilter from "../items-filter/ItemsFilter";
import ItemCard from "../item-card/ItemCard";
import { ItemsContext } from "../../App";

export default function HomePage () {

  const { items } = React.useContext(ItemsContext);

  function renderItems(items) {
    return items && items.map(itemsArr => (
      itemsArr.map(item => (
        <ItemCard 
            key = {item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            rating={item.rating}
            price={item.price}
        />
      ))
    ));
  }
  
  console.log('Items:', items);

  return (
    <div>
      <TopBar />
      <ItemsFilter />
      <div>
        {renderItems(items)}
      </div>
    </div>
  );
}