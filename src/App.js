import React, { Component } from "react";

import "./App.css";
import Header from "./Components/Header";
//import FrendsList from "./Components/FrendsList";
import FrendsCard from "./Components/FrendsCard";
import FrendsList from "./Components/FrendsList";
class App extends Component {
  state = {
    frend: [
      {
        id: 1,
        name: "Sponge Bob",
        photo: require("./Components/person-one.jpeg"),
        occupation: "Fry Cook",
        location: "A pineapple Under sea",
      },
      {
        id: 1,
        name: "Mr.Krabs",
        photo: require("./Components/person-two.jpeg"),
        occupation: "Restaurant Owner ",
        location: "A Giant Anchor",
      },
      {
        id: 3,
        name: "squidward",
        photo: require("./Components/person-three.jpeg"),
        occupation: "Casher",
        location: "An Easter Island Head",
      },
    ],
  };

  render() {
    return (
      <div>
        <Header />
        <FrendsList frend={this.state.frend} />
      </div>
    );
  }
}

export default App;
