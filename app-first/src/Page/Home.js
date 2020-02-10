import React from "react";
import IDcard from "../Component/IDcard";
import logo from "../logo.svg";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      licnaKarta: {
        name: "Stefan Todorovic",
        age: 29,
        img: logo
      }
    };
  }
  render() {
    let user = this.state.licnaKarta;
    return <div></div>;
  }
}

export default Home;
