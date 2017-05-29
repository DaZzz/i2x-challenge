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

export default connect(state => ({ isAuthenticated: state.auth.isAuthenticated }))(App)
