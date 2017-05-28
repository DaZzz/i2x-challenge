import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
  render () {
    return (
      <div>
        <h1> Login </h1>
        <div>
          <Link to="/recordings">
            Recordings
          </Link>
        </div>
      </div>
    )
  }
}

export default Login
