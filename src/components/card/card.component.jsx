import { Component } from 'react';
import "./card.styles.css"

class Card extends Component {
    render() {
        const {i} = this.props;
        const {name, _id} = this.props.monster;
        return(
            <div key={_id} className="card-container">
                <img 
                src={`https://avatars.dicebear.com/api/bottts/${i}.svg?r=50&&scale=80&colorful=1&size=180`} 
                alt={`monster ${name}`} 
                />
                <h2>{name}</h2>
            </div>
        )
        
    }
}

export default Card