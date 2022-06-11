import "./App.css";

import { useEffect, useState } from "react";
import Cardlist from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  // array destructuring the initial val and the function to update it in the state, with an initial val of an empty str
  const [monsters, setMonsters] = useState([]);
  const [searchFieldVal, setSearchFieldVal] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [nameIdCombination, setNameIdCombination] = useState([]);

  // only fetch monsters once during the mount
  useEffect(
    () => {
      // get all monsters from the api
      fetch(
        "https://the-one-api.dev/v2/character?limit=10&race!=Human,Hobbit,Elf,Dwarf,Elves,Maiar,Eagles,Ainur",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer Y774fkyi1vO9eKEGGUvi",
            // Accept: "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((users) => {
          const usersList = users.docs;
          const nameIdComb = usersList.map((user, i) => {
            return { name: user.name, id: i };
          });
          setNameIdCombination(nameIdComb);
          setMonsters(usersList);
        });
    },
    // array of dependencies
    []
  );

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      // on each change iterate over the state monster array and check if the given name contains the text typed in the input field
      return monster.name.toLowerCase().includes(searchFieldVal);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchFieldVal]);

  const onSearchChange = (event) => {
    const searchFieldStr = event.target.value.toLowerCase();
    // update the state
    setSearchFieldVal(searchFieldStr);
    // setSearchFieldVal(searchFieldVal);
  };

  return (
    <div className="App">
      <h1 className="app-title">Lotr monsters as their Robot shapes.</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search for a monster"
        className="monsters-search-box"
      />
      <Cardlist
        monsters={filteredMonsters}
        nameIdCombination={nameIdCombination}
      />
    </div>
  );
};

export default App;
