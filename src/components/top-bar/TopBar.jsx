import { Link } from "react-router-dom"

export default function TopBar () {
  return (
    <div>
      <div>
        <h1>Shop Name</h1>
        <nav>
          <Link to="/">Home</Link>
          <br />
          <Link to="/shop">Shop</Link>
          <button>Cart</button>
        </nav>
      </div>
    </div>
  )
}