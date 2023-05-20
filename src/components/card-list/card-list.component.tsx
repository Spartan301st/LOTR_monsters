import "./card-list.styles.css"
import Card from "../card/card.component"
import { Monster } from "../../App"

type CardListProps = {
  monsters: Monster[]
}

// const CardList = ({monsters, nameIdCombination}: CardListProps) =>  (
const CardList = ({monsters}: CardListProps) =>  (
  
  <div className="card-list">
    {monsters.map((monster, i) => {
      // const oldId =  nameIdCombination.find(obj => obj.name === monster.name).id;
      return (
        // <Card key={i} monster={monster} i={oldId}/>
        <Card key={i} monster={monster}/>
      );
    })}
  </div>
)

export default CardList