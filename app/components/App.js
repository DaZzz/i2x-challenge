import React, { Component } from 'react'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import { Login, Recordings } from '../routes'
import styled from 'styled-components'

const AppWrapper = styled.div`
  font-family: 'Lato', sans-serif;
`

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper>
          <Route exact path="/" render={() => (
            <Redirect to="/recordings"/>
          )}/>
          <Route path="/login" component={Login} />
          <Route path="/recordings" component={Recordings} />
        </AppWrapper>
      </Router>
    )
  }
}

export default App
