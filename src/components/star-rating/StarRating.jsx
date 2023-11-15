import StarFull from "../../assets/svg/star-full.svg"
import StarEmpty from "../../assets/svg/star-empty.svg"
import StarHalf from "../../assets/svg/star-half.svg"


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
      <img src={star} alt={`Average customer review of the item ${ratingScore}`} key={starArr.indexOf(props.id)}/>
    ))

  }

  return (
    <>
      {starRating(props.rate)}
    </>
  )
}