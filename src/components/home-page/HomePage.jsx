import { Link } from "react-router-dom";
import TopBar from "../top-bar/TopBar";
import style from "./HomePage.module.css"

export default function HomePage () {

  return (
    <>
      <TopBar />
      <div className={style.homePageContainer}>
        <div className={style.homePageImgContainer}>
          <img src="" alt="" className={style.imgOne}/>
          <img src="" alt="" className={style.imgTwo}/>
          <img src="" alt="" className={style.imgThree}/>
        </div>
        <Link to="/shop" className={style.shopNowLink}>SHOP NOW</Link>
      </div>
    </>
  );
}