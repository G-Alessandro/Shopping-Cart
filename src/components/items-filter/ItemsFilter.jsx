import React from "react"
import { ItemsCategoriesContext } from "../../App"

export default function ItemsFilter() {

  const {itemsCategories, setItemsCategories} = React.useContext(ItemsCategoriesContext);

  function jeweleryFilter(event) {
    if (event.target.checked) {
      setItemsCategories((prevItemsCategories) => [
        ...prevItemsCategories,"jewelery"
      ]);
    } else {
      setItemsCategories((prevItemsCategories) =>
        prevItemsCategories.filter((category) => category !== "jewelery")
      );
    }
  }

  function menClothingFilter(event) {
    if (event.target.checked) {
      setItemsCategories((prevItemsCategories) => [
        ...prevItemsCategories,"men's clothing"
      ]);
    } else {
      setItemsCategories((prevItemsCategories) =>
        prevItemsCategories.filter((category) => category !== "men's clothing")
      );
    }
  }

  function womenClothingFilter(event) {
    if (event.target.checked) {
      setItemsCategories((prevItemsCategories) => [
        ...prevItemsCategories,"women's clothing"
      ]);
    } else {
      setItemsCategories((prevItemsCategories) =>
        prevItemsCategories.filter((category) => category !== "women's clothing")
      );
    }
  }

  return (
      <nav>
        <input 
          type="checkbox" 
          id="jewelery" 
          name="jewelery" 
          onChange={jeweleryFilter}
          checked={itemsCategories.includes("jewelery")}
        />
        <label htmlFor="jewelery">Jewelery</label>

        <input 
          type="checkbox" 
          id="men-clothing" 
          name="men-clothing" 
          onChange={menClothingFilter}
          checked={itemsCategories.includes("men's clothing")}
        />
        <label htmlFor="men-clothing">Men's clothing</label>

        <input 
          type="checkbox" 
          id="women-clothing" 
          name="women-clothing" 
          onChange={womenClothingFilter}
          checked={itemsCategories.includes("women's clothing")}
        />
        <label htmlFor="women-clothing">Women's clothing</label>

        <div>
          <input type="checkbox" id="increasing-price" name="increasing-price" />
          <label htmlFor="increasing-price">Increasing Price</label>
          <input type="checkbox" id="decreasing-price" name="decreasing-price" />
          <label htmlFor="decreasing-price">Decreasing Price</label>
        </div>
        
      </nav>
  )
}