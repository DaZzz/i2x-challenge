import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Background = styled.div`
  background-color: #303577;
  height: 100vh;
  width: 100vw;
  flex-flow: row nowrap;
`

class Login extends Component {
  render () {
    return (
      <Background>
        <h1> Login </h1>
        <div>
          <Link to="/recordings">
            Recordings
          </Link>
        </div>
      </Background>
    )
  }
}

export default Login
