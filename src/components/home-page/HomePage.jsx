import React from "react"
import TopBar from "../top-bar/TopBar"
import ItemsFilter from "../items-filter/ItemsFilter"
import ItemCard from "../item-card/ItemCard"

export default function HomePage () {

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
        setItems(categoryData)
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    fetchDataForCategories();
  }, [itemsCategories]);

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
  )
}