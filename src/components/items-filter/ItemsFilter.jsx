export default function ItemsFilter() {
  return (
      <nav>
        <input type="checkbox" id="jewelery" name="jewelery"/>
        <label htmlFor="jewelery">Jewelery</label>

        <input type="checkbox" id="men-clothing" name="men-clothing"/>
        <label htmlFor="men-clothing">Men's clothing</label>

        <input type="checkbox" id="women-clothing" name="women-clothing"/>
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