import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Recordings extends Component {
  render () {
    return (
      <div>
        <h1> Recordings </h1>
        <div>
          <Link to="/login">
            Login
          </Link>
        </div>
      </div>
    )
  }
}

export default Recordings
