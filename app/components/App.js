import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { Login, Recordings } from '../routes'
import styled from 'styled-components'

const AppWrapper = styled.div`
  font-family: 'Lato', sans-serif;
`

const App = props =>
  <Router>
    <AppWrapper>
      <Route exact path="/" render={() => (
        <Redirect to="/recordings" />
      )}/>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/recordings" component={Recordings} isAuthenticated={props.isAuthenticated}/>
    </AppWrapper>
  </Router>

// ---
// Should be connected here to make PrivateRoute work correctly take a look at:
// https://stackoverflow.com/questions/43892050/react-router-4-x-privateroute-not-working-after-connecting-to-redux
// ---
export default connect(state => ({ isAuthenticated: state.auth.isAuthenticated }))(App)
