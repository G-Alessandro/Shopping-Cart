import { v4 as uuidv4 } from 'uuid';
import StarFull from "../../assets/svg/star-full.svg"
import StarEmpty from "../../assets/svg/star-empty.svg"
import StarHalf from "../../assets/svg/star-half.svg"
import style from "./StarRating.module.css"


export default function StarRating(props) {

  function starRating(ratingScore) {

    let rating = ratingScore;
    let starArr = [];

    for (let i = 0; i < 5; i += 1) {
      if(Math.sign(rating - 1) !== -1 ) {
        starArr.push(StarFull);
        rating -= 1;
      } else if (Math.sign(rating - .5) !== -1 ) {
        starArr.push(StarHalf);
        rating -= .5;
      } else {
        starArr.push(StarEmpty);
      }
    }

    return starArr.map((star) => (
      <img src={star} alt={`Average customer review of the item ${ratingScore}`} key={uuidv4()} className={style.starImg}/>
    ))

  }

  return (
    <>
      {starRating(props.rate)}
    </>
  )
}