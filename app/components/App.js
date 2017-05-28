import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Login, Recordings } from '../routes'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => (
            <Redirect to="/recordings"/>
          )}/>
          <Route path="/login" component={Login} />
          <Route path="/recordings" component={Recordings} />
        </div>
      </Router>
    )
  }
}

export default App
