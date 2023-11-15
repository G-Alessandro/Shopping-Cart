import StarRating from "../star-rating/StarRating";
import style from "./ItemCard.module.css";

export default function ItemCard(props) {
  return (
    <button key={props.id} className={style.card}>
      <img src={props.image} alt={props.description} className={style.img} />
      <h2 className={style.cardTitle}>{props.title}</h2>
      <span>
        <StarRating 
          id={props.id}
          rate={props.rating.rate}
        />
        {props.rating.rate} {props.rating.count}
        </span>
      <br />
      <span>{props.price} €</span>
    </button>
  )
}