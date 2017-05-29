import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import { Login, Recordings } from '../routes'
import styled from 'styled-components'
import store from 'store'

const AppWrapper = styled.div`
  font-family: 'Lato', sans-serif;
`

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <AppWrapper>
            <Route exact path="/" render={() => (
              <Redirect to="/recordings"/>
            )}/>
            <Route path="/login" component={Login} />
            <Route path="/recordings" component={Recordings} />
          </AppWrapper>
        </Router>
      </Provider>
    )
  }
}

export default App
