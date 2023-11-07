import React from "react";
import TopBar from "../top-bar/TopBar";
import ItemsFilter from "../items-filter/ItemsFilter";
import ItemCard from "../item-card/ItemCard";

export const ItemsCategoriesContext= React.createContext(null);

export default function HomePage () {

  const [itemsCategories, setItemsCategories] = React.useState(["jewelery","men's clothing","women's clothing"]);
  const [items, setItems] = React.useState(null);

  React.useEffect(() => {
    const fetchDataForCategories = async () => {
      try {
        const categoryPromises = itemsCategories.map((category) =>
          fetch(`https://fakestoreapi.com/products/category/${category}`, { mode: "cors" })
            .then((res) => res.json())
        );

        const categoryData = await Promise.all(categoryPromises);
        const concatData = categoryData.reduce((acc, data) => acc.concat(data), []);
        setItems(concatData);

      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    fetchDataForCategories();
  }, [itemsCategories]);

  function renderItems(items) {
    return items && items.map(item => (
        <ItemCard 
          key = {item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          rating={item.rating}
          price={item.price}
        />
    ))
  }
  
  return (
    <div>
        <TopBar />
      <ItemsCategoriesContext.Provider value={{itemsCategories, setItemsCategories}}>
        <ItemsFilter />
      </ItemsCategoriesContext.Provider>
      <div>
        {renderItems(items)}
      </div>
    </div>
  );
}