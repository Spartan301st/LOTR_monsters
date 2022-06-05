// import logo from "./logo.svg";
import "./App.css";

// import { Component } from "react";
import { useEffect, useState } from "react";
import Cardlist from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  // array destructuring the initial val and the function to update it in the state, with an initial val of an empty str
  const [searchFieldVal, setSearchFieldVal] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

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
        .then((users) => setMonsters(users.docs));
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

  // don't use fetch outside the useEffect as it cause an infinite loop, because even though the monsters are the same the array of lotr monsters that we get from the api stored in machine aren't so it gets fetched infitely many times
  // // get all monsters from the api
  // fetch(
  //   "https://the-one-api.dev/v2/character?limit=10&race!=Human,Hobbit,Elf,Dwarf,Elves,Maiar,Eagles,Ainur",
  //   {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer Y774fkyi1vO9eKEGGUvi",
  //       // Accept: "application/json",
  //     },
  //   }
  // )
  // .then((res) => res.json())
  // .then((users) => setMonsters(users));

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
      <Cardlist monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     // necessary for Component's functionality
//     super();

//     this.state = {
//       monsters: [],
//       // to be updated each time a new thing is typed for keeping track
//       searchField: "",
//     };
//   }

//   // codes within will be executed once the component gets added to the DOM
//   async componentDidMount() {
//     // get all monsters from the api
//     let res = await fetch(
//       "https://the-one-api.dev/v2/character?limit=10&race!=Human,Hobbit,Elf,Dwarf,Elves,Maiar,Eagles,Ainur",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer Y774fkyi1vO9eKEGGUvi",
//           // Accept: "application/json",
//         },
//       }
//     ).then((res) => res.json());

//     // save the list of monsters in the state
//     this.setState(() => {
//       return { monsters: res.docs };
//     });
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     // updating the state to reflect the search on the rendered names
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     // destructuring only the necessary stuff
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     // check if the current monsters array contains the event target value among monsters names
//     const filteredMonsters = monsters.filter((monster) =>
//       // on each change iterate over the state monster array and check if the given name contains the text typed in the input field
//       monster.name.toLowerCase().includes(searchField)
//     );
//     return (
//       <div className="App">
//         <h1 className="app-title">Lotr monsters as their Robot shapes.</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="Search for a monster"
//           className="monsters-search-box"
//         />
//         <Cardlist monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
