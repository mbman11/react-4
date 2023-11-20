function Card(props){
  return (
    <div className="card">
      <p>{props.name}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default Card;