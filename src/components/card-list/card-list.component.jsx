import { Component } from 'react';
import "./card-list.styles.css"
import Card from "../card/card.component.jsx"

class CardList extends Component {
    render() {
        const {monsters} = this.props;
        return (
          <div className="card-list">
            {monsters.map((monster, i) => {
              // const {name, id} = monster;
              // return(
              //   <div key={i} className="card-container">
              //     <img 
              //       src={`https://avatars.dicebear.com/api/bottts/${i}.svg?r=50&&scale=80&colorful=1&size=180`} 
              //       alt={`monster ${name}`} 
              //     />
              //     <h2 key={i}>{name}</h2>
              //     {/* {console.log(monster)} */}
              //   </div>
              // )
              // console.log(monster._id)
              return (
                <Card monster={monster} i={i}/>
              )
            })}
          </div>
        )
    }
}

export default CardList