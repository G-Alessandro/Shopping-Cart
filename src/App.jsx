import React from "react";
import HomePage from "./components/home-page/HomePage";

export const ItemsCategoriesContext= React.createContext(null);
export const ItemsContext = React.createContext(null);

export default function App () {

  const [itemsCategories, setItemsCategories] = React.useState(["jewelery","men's clothing","women's clothing"]);
  const [items, setItems] = React.useState(null);

  React.useEffect(() => {
    const fetchDataForCategories = async () => {
      try {
        const categoryPromises = itemsCategories.map((category) =>
          fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then((res) => res.json())
        );

        const categoryData = await Promise.all(categoryPromises);
        setItems(categoryData);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    fetchDataForCategories();
  }, [itemsCategories]);

  return (
    <>
      <ItemsCategoriesContext.Provider value={{itemsCategories, setItemsCategories}}>
        <ItemsContext.Provider value={{items, setItems}}>
          <HomePage />
        </ItemsContext.Provider>
      </ItemsCategoriesContext.Provider>
    </>
  );
}