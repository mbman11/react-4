function Card(props){
  return (
    <div className="card">
    <h3>{props.name}</h3>
      <p>{props.description}</p>
      <img className="imgFile" src={props.imgFile}></img>
      <a href={props.link}><button className="proj-btn">See Project</button></a>
    </div>
  )
}

export default Card;