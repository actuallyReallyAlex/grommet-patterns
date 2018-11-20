import React, { Component } from 'react'
import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import { screens } from './constants'

class App extends Component {
  state = { screen: 'Card' }

  switchScreen = screen => {
    this.setState(() => {
      return { screen: screen }
    })
    // console.log('screen switched to: ' + screen)
  }

  render() {
    const Screen = screens[this.state.screen]
    return (
      <Grommet theme={grommet}>
        <Screen switchScreen={this.switchScreen} />
      </Grommet>
    )
  }
}

export default App
