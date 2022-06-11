import "./card-list.styles.css"
import Card from "../card/card.component.jsx"


const CardList = ({monsters, nameIdCombination}) =>  (
  
  <div className="card-list">
    {monsters.map((monster, i) => {
      const oldId =  nameIdCombination.find(obj => obj.name === monster.name).id;
      return (
        <Card key={i} monster={monster} i={oldId}/>
      );
    })}
  </div>
)

export default CardList