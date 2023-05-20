import { Monster } from "../../App";
import "./card.styles.css"

type CardProps = {
    monster: Monster;
}

const Card = ({monster: {id, name}}: CardProps) => (
    <div key={id} className="card-container">
        <img 
        // src={`https://avatars.dicebear.com/api/bottts/${i}.svg?r=50&&scale=80&colorful=1&size=180`} 
        src={`https://api.dicebear.com/6.x/bottts/svg?seed=FelixrandomizeIds=truer=50&&scale=80&colorful=1&size=180`} 
        alt={`monster ${name}`} 
        />
        <h2>{name}</h2>
    </div>
)

export default Card;