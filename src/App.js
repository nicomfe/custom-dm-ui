import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'

// We can't use pure function here because in that case hot reloading won't work
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    )
  }
}

export default App
