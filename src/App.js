// import logo from "./logo.svg";
import "./App.css";

import { Component } from "react";
import Cardlist from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    // necessary for Component's functionality
    super();

    this.state = {
      monsters: [],
      // to be updated each time a new thing is typed for keeping track
      searchField: "",
    };
  }

  // codes within will be executed once the component gets added to the DOM
  async componentDidMount() {
    // get all monsters from the api
    let res = await fetch(
      "https://the-one-api.dev/v2/character?limit=10&race!=Human,Hobbit,Elf,Dwarf,Elves,Maiar,Eagles,Ainur",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer Y774fkyi1vO9eKEGGUvi",
          // Accept: "application/json",
        },
      }
    ).then((res) => res.json());

    // save the list of monsters in the state
    this.setState(() => {
      return { monsters: res.docs };
    });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    // updating the state to reflect the search on the rendered names
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // destructuring only the necessary stuff
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    // check if the current monsters array contains the event target value among monsters names
    const filteredMonsters = monsters.filter((monster) =>
      // on each change iterate over the state monster array and check if the given name contains the text typed in the input field
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <h1 className="app-title">Lotr monsters as their Robot shapes.</h1>
        {/* <input
          className="search-box"
          type="search"
          placeholder="Search a monster"
          onChange={onSearchChange}
        /> */}
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search for a monster"
          className="monsters-search-box"
        />
        {/* loop through all potential monster matches and show their names */}
        {/* {filteredMonsters.map((monster, i) => (
          <div key={monster.id}>
            <h2>{monster.name}</h2>
          </div>
        ))} */}
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
