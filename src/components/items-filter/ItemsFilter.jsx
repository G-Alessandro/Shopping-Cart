import React from "react"
import { ItemsCategoriesContext } from "../shop/Shop"
import style from "./ItemsFilter.module.css"

export default function ItemsFilter() {

  const {itemsCategories, setItemsCategories} = React.useContext(ItemsCategoriesContext);

  function filterByCategory(categoryName) {
    return (event) => {
      if (event.target.checked) {
        setItemsCategories((prevItemsCategories) => [
          ...prevItemsCategories,
          categoryName
        ]);
      } else {
        setItemsCategories((prevItemsCategories) =>
          prevItemsCategories.filter((category) => category !== categoryName)
        );
      }
    };
  }

  return (
    <nav className={style.categoryContainer}>

      <h2>Category</h2>

      <div className={style.inputContainer}>
        <input 
          type="checkbox" 
          id="jewelery" 
          name="jewelery" 
          onChange={filterByCategory("jewelery")}
          checked={itemsCategories.includes("jewelery")}
        />
        <label htmlFor="jewelery">Jewelery</label>
      </div>

      <div className={style.inputContainer}>
        <input 
          type="checkbox" 
          id="men-clothing" 
          name="men-clothing" 
          onChange={filterByCategory("men's clothing")}
          checked={itemsCategories.includes("men's clothing")}
        />
        <label htmlFor="men-clothing">Men's clothing</label>
      </div>

      <div className={style.inputContainer}>
        <input 
          type="checkbox" 
          id="women-clothing" 
          name="women-clothing" 
          onChange={filterByCategory("women's clothing")}
          checked={itemsCategories.includes("women's clothing")}
        />
        <label htmlFor="women-clothing">Women's clothing</label>
      </div>

    </nav>
  )
}