import "./card.css"
const Card = ({title,description,svg}) => {
  
  return (
    <div className='card'>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="svg-icon" dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  )
}

export default Card