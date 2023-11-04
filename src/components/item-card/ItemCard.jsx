import style from "./ItemCard.module.css"

export default function ItemCard(props) {
  return (
    <button key={props.id} className={style.card}>
      <img src={props.image} alt={props.description} className={style.img} />
      <h2>{props.title}</h2>
      <div>
        <span>{props.rating.rate} {props.rating.count}</span>
      </div>
      <span>{props.price} €</span>
    </button>
  )
}