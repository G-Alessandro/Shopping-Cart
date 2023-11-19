import { Link } from "react-router-dom";
import TopBar from "../top-bar/TopBar";
import style from "./HomePage.module.css"

export default function HomePage () {

  return (
    <div className={style.homePageContainer}>
      <TopBar />
      <Link to="/shop" className={style.shopNowLink}>SHOP NOW</Link>
    </div>
  );
}