import { Link, useLocation } from "react-router-dom";
import TopBar from "../top-bar/TopBar";

export default function ItemAddedPage() {

  const location = useLocation();
  const item = location.state?.item;

  return (
    <>
      <TopBar />
      <h1>Added To Cart</h1>
      <div>
        <img src={item.image} alt={item.description}/>
        <div>
          <h2>{item.title}</h2>
        </div>
      </div>
      <div>
        <Link to={'/shop'}><button>Keep Shopping</button></Link>
        <Link to={'/cart'}><button>Proceed To Checkout</button></Link>
      </div>
    </>
  )
}