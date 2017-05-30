import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import logoUrl from '../images/logo-small.png'
import Card from './Card'

const Background = styled.div`
  background-color: #303577;
  min-height: 100vh;
  width: 100vw;
  flex-flow: row nowrap;
`

const Header = styled.div`
  width: 720px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15)
`

const Logo = styled.div`
  width: 172px;
  height: 44px;
  background-image: url(${logoUrl});
  background-repeat: no-repeat;
  background-size: contain;
`

const SignoutButton = styled.button`
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  padding: 10px 28px;
  border: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.25);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 1px #ff7f00;
  }
`

const Content = styled.div`
  width: 720px;
  margin: 0 auto;
  padding: 32px 0;

`

const Title = styled.div`
  display: inline-block;
  font-size: 32px;
  color: #fff;
  margin-bottom: 24px;
`

const ItemsCount = styled.div`
  display: inline-block;
  color: rgba(255, 255, 255, 0.65);
  padding-left: 12px;
  position: relative;

  &:before {
    content: '';
    display: block;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    position: absolute;
    top: calc(50% - 2px);
    left: 0;
  }
`

class Recordings extends Component {
  static propTypes = {
    recordings: PropTypes.array,
    isFetching: PropTypes.bool
  }
  state = {
    logout: false,
    currentRecordingId: null
  }

  componentDidMount () {
    this.props.fetchRecordings()
  }

  handleSignout = () => {
    this.props.logout()
    this.setState({logout: true})
  }

  handlePlay = id => {
    this.setState(state => ({
      currentRecordingId: id === state.currentRecordingId ? null : id
    }))
  }

  render () {
    if (this.state.logout) return <Redirect to="/login" />
    const { recordings, isFetching } = this.props

    return (
      <Background>
        <Header>
          <Logo />
          <SignoutButton onClick={this.handleSignout}> Sign out </SignoutButton>
        </Header>

        <Content>
          <Title>
            Recordings <ItemsCount>
              { isFetching
                ? ` Loading...`
                : ` ${recordings.length} items`
              }
            </ItemsCount>
          </Title>

          {recordings.map(recording => (
            <Card
              key={recording.id}
              created={recording.created}
              rating={recording.rating}
              transcript={recording.final_script}
              duration={recording.duration}
              audioSource={recording.url}
              isPlaying={this.state.currentRecordingId === recording.id}
              onPlay={() => this.handlePlay(recording.id)}
            />
          ))}
        </Content>
      </Background>
    )
  }
}

export default Recordings
