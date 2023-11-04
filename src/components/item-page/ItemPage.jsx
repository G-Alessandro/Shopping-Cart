export default function ItemPage(props) {
  return (
    <div>
      <button>Back</button>
      <img src={props.image} alt={props.description} className={style.img} />
      <h2>{props.title}</h2>
      <span>{props.rating.rate} {props.rating.count}</span>
      <span>{props.price} €</span>
    </div>
  )
}