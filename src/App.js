// import logo from "./logo.svg";
import "./App.css";

import { Component } from "react";

class App extends Component {
  constructor() {
    // necessary for Component's functionality
    super();

    this.state = {
      monsters: [],
      // monsters: [
      //   {
      //     name: "Ungolia"
      //   },
      //   {
      //     name: "Glaurung"
      //   },
      //   {
      //     name: "Ancalagon"
      //   },
      //   {
      //     name: "Scatha"
      //   },
      //   {
      //     name: "Smaug"
      //   },
      // ],

      // monster1: {
      //   name: "Ungolia"
      // },
      // monster2: {
      //   name: "Glaurung"
      // },
      // monster3: {
      //   name: "Ancalagon"
      // },
    };
    console.log(`1`);
  }

  // codes within will be executed once the component gets added to the DOM
  async componentDidMount() {
    console.log(`3`);
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

    this.setState(() => {
      return { monsters: res.docs };
    });
    console.log(this.state);
  }

  render() {
    console.log(`2`);
    return (
      <div className="App">
        {/* <h2>{this.state.monster1.name}</h2>
        <h2>{this.state.monster2.name}</h2>
        <h2>{this.state.monster3.name}</h2> */}
        {this.state.monsters.map((monster, i) => (
          <h2 key={i}>{monster.name}</h2>
        ))}
      </div>
    );
  }
}

//  { <h1>
//           Hello {this.state.character}! Welcome to {this.state.school}
//         </h1> }
// <h1>
//   Hello {this.state.character.fname} {this.state.character.lname}!
//   Welcome to {this.state.school}
// </h1>
// <button
//   onClick={() =>
//     this.setState(
//       () => {
//         return {
//           character: { fname: "Hermione", lname: "Granger" },
//         };
//       },
//       () => {
//         console.log(this.state);
//       }
//     )
//   }
// >
//   Modify character
// </button>
// { <button
//   onClick={() =>
//     this.setState({
//       character: { fname: "Hermione", lname: "Granger" },
//     })
//   }
// >
//   Modify character
// </button> }
// { <button onClick={() => this.setState({ character: "Hermione" })}>
//   Modify character
// </button> }
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//   );
// }

export default App;
