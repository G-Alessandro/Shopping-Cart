import { Link, useLocation } from "react-router-dom";

export default function ItemPage() {

  const location = useLocation();
  const item = location.state?.item

  return (
    <div>
      <Link to={'/shop'}><button>Back</button></Link>
      <img src={item.image} alt={item.description} />
      <h2>{item.title}</h2>
      <span>{item.rating.rate} {item.rating.count}</span>
      <span>{item.price} €</span>
      <p>{item.description}</p>
    </div>
  )
}