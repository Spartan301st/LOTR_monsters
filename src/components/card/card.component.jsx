
import "./card.styles.css"

const Card = ({monster: {_id, name}, i}) => (
    <div key={_id} className="card-container">
        <img 
        src={`https://avatars.dicebear.com/api/bottts/${i}.svg?r=50&&scale=80&colorful=1&size=180`} 
        alt={`monster ${name}`} 
        />
        <h2>{name}</h2>
    </div>
)

export default Card;