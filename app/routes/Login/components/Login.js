import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import logoUrl from '../images/logo-big.png'
import wavesUrl from '../images/waves.svg'

const wavesKeyframes = keyframes`
  0% {
    background-position: 0px 275px;
  }

  100% {
    background-position: 1050px 275px;
  }
`

const Background = styled.div`
  background-color: #303577;
  background-image: url(${wavesUrl});
  background-repeat: repeat-x;
  background-size: 1050px 250px;
  background-position: 0px 275px;
  height: 100vh;
  width: 100vw;
  flex-flow: row nowrap;
  padding-top: 40px;
  animation: ${wavesKeyframes} 60s infinite linear;
`

const Logo = styled.div`
  width: 118px;
  height: 110px;
  background-image: url(${logoUrl});
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto;
  margin-bottom: 12px;
`

const Subtitle = styled.div`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  margin-bottom: 96px;
  font-style: italic;
`

const LoginCard = styled.div`
  width: 360px;
  border-radius: 12px;
  border-top: 12px solid #ff7f00;
  background-color: #fff;
  margin: 0 auto 24px;
  padding: 24px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`

const InputGroup = styled.div`
  margin-bottom: 16px;
`

const InputLabel = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  color: #222;
  letter-spacing: 0.5;
  margin-bottom: 4px;
`

const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 10px;
  color: #222;
  appearence: none;

  &:focus {
    border-color: #ff7f00;
    outline: none;
    box-shadow: 0 0 3px #ff7f00;
  }
`

const Button = styled.button`
  display: block;
  width: 100%;
  background-color: #ff7f00;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  padding: 11px;
  border: none;
  margin-top: 24px;

  &:hover {
    background-color: #f77a00;
  }

  &:active {
    background-color: #db6d00;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 1px #ff7f00;
  }
`

class Login extends Component {

  state = {
    email: '',
    password: '',
    redirect: false
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.isFetching && !nextProps.isFetching) {
      if (nextProps.isAuthenticated) {
        this.setState({redirect: true})
      } else {
        // Show error
      }
    }
  }

  handleLogin = () => {
    const { email, password } = this.state

    this.props.login({
      email,
      password
    })
  }

  handleInputChange = (event) => {
    const target = event.target
    this.setState({[target.name]: target.value})
  }

  render () {
    if (this.state.redirect) return <Redirect to="/recordings" />

    return (
      <Background>
        <Logo />
        <Subtitle> Find best recordings but first login to your account </Subtitle>

        <LoginCard>
          <InputGroup>
            <InputLabel> Email </InputLabel>
            <Input type="email" name="email" onChange={this.handleInputChange} />
          </InputGroup>

          <InputGroup>
            <InputLabel> Password </InputLabel>
            <Input type="password" name="password" onChange={this.handleInputChange} />
          </InputGroup>

          <Button onClick={this.handleLogin}> Login </Button>
        </LoginCard>
      </Background>
    )
  }
}

export default Login
