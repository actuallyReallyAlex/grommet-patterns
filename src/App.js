import React, { Component } from "react";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import { screens } from "./constants";

class App extends Component {
  state = { screen: "Home" };
  render() {
    return <Grommet theme={grommet}>{screens[this.state.screen]}</Grommet>;
  }
}

export default App;
