import StarRating from "../star-rating/StarRating";
import style from "./ItemCard.module.css";

export default function ItemCard(props) {
  return (
    <button key={props.id} className={style.card}>

      <img src={props.image} alt={props.description} className={style.cardImg} />

      <div className={style.container}>
        <h2 className={style.cardTitle}>{props.title}</h2>
        <div className={style.ratingContainer}>
          <StarRating 
            id={props.id}
            rate={props.rating.rate}
          />
          <p className={style.reviewCount}>{props.rating.count}</p>
        </div>
        <p className={style.price}>{props.price} €</p>
      </div>

    </button>
  )
}