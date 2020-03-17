import React, { Component } from "react";
import { CardList } from "./Components/card-list/card-list.component";
import { SearchBox } from "./Components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      placeHplaceholderolder:''
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(result => result.json())
      .then(users => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div className="App">
        <SearchBox placeholder="search monster" />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}
export default App;
