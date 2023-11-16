import { Link, useLocation } from "react-router-dom";
import TopBar from "../top-bar/TopBar";
import style from "./ItemAddedPage.module.css"

export default function ItemAddedPage() {

  const location = useLocation();
  const item = location.state?.item;

  return (
    <>
      <TopBar />
      <div className={style.container}>
        <img src={item.image} alt={item.description} className={style.itemImg}/>
        <div className={style.infoContainer}>
          <div>
            <h2>{item.title}</h2>
            <p className={style.addedTitle}>✔ Added To Cart</p>
          </div>
          <div className={style.linkContainer}>
            <Link to={'/shop'} className={style.itemAddedLink}>Keep Shopping</Link>
            <Link to={'/cart'} className={style.itemAddedLink}>Proceed To Checkout</Link>
          </div>
        </div>
      </div>
    </>
  )
}