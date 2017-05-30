import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import { Redirect } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import logoUrl from '../images/logo-big.png'
import wavesUrl from '../images/waves.svg'
import SubmitButton from './SubmitButton'

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

const shakeKeyframes = keyframes`
  0% {
    transform: translateX(0);
  }

  20% {
    transform: translateX(-15px);
  }

  40% {
    transform: translateX(12px);
  }

  55% {
    transform: translateX(-8px);
  }

  70% {
    transform: translateX(5px);
  }

  77% {
    transform: translateX(0);
  }
`

const LoginCard = styled.form`
  width: 360px;
  border-radius: 12px;
  border-top: 12px solid #ff7f00;
  background-color: #fff;
  margin: 0 auto 24px;
  padding: 24px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  ${props => props.error
    ? `animation: ${shakeKeyframes} 0.4s ease;`
    : `animation: none;`
  }
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

class Login extends Component {
  static propTypes = {
    isFetching: PropTypes.bool,
    isAuthenticated: PropTypes.bool
  }

  state = {
    email: '',
    password: '',
    redirect: false,
    error: false
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.isFetching && !nextProps.isFetching) {
      if (nextProps.isAuthenticated) {
        this.setState({redirect: true})
      } else {
        this.setState({error: true})
        if (this.loginCardRef) {
          const cardNode = findDOMNode(this.loginCardRef)

          cardNode.style.webkitAnimation = 'none'
          cardNode.style.animation = 'none'

          setTimeout(() => {
            cardNode.style.webkitAnimation = ''
            cardNode.style.animation = ''
          }, 10)
        }
      }
    }
  }

  handleLogin = event => {
    if (this.props.isFetching) return
    const { email, password } = this.state

    this.props.login({ email, password })
    event.preventDefault()
  }

  handleInputChange = event => {
    const target = event.target
    this.setState({[target.name]: target.value})
  }

  render () {
    if (this.state.redirect) return <Redirect to="/recordings" />

    return (
      <Background>
        <Logo />
        <Subtitle> Find best recordings but first login to your account </Subtitle>

        <LoginCard
          ref={ref => { this.loginCardRef = ref }}
          error={this.state.error}
          onSubmit={this.handleLogin}>
          <InputGroup>
            <InputLabel> Email </InputLabel>
            <Input type="email" name="email" onChange={this.handleInputChange} />
          </InputGroup>

          <InputGroup>
            <InputLabel> Password </InputLabel>
            <Input type="password" name="password" onChange={this.handleInputChange} />
          </InputGroup>

          <SubmitButton loading={this.props.isFetching} text="Login" />
        </LoginCard>
      </Background>
    )
  }
}

export default Login
