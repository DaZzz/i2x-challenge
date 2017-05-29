import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import logoUrl from '../images/logo-small.png'
import playUrl from '../images/play.svg'
import pauseUrl from '../images/pause.svg'
import Rating from './Rating'

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

  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 1px #ff7f00;
  }
`

const Content = styled.div`
  width: 720px;
  margin: 0 auto;
  padding-top: 32px;
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

const Card = styled.div`
  padding: 24px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`

const CardHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
`

const InfoBlock = styled.div`
  flex: 1;
  display: block;
`

const InfoLabel = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  color: #888;
  letter-spacing: 0.5;
  margin-bottom: 8px;
`

const InfoText = styled.div`
  font-size: 16px;
  color: #222;
  line-height: 1.6;
`

const PlayButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: #ff7f00;
  border: none;
  background-image: url(${playUrl});
  background-repeat: no-repeat;
  background-size: 32px 32px;
  background-position: center;

  &:active {
    background-color: #db6d00;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 1px #ff7f00;
  }
`


class Recordings extends Component {
  handleSignout = () => {
    this.props.logout()
    this.props.history.push('/login')
  }

  render () {
    return (
      <Background>
        <Header>
          <Logo />
          <SignoutButton onClick={this.handleSignout}> Sign out </SignoutButton>
        </Header>


        <Content>
          <Title>
            Recordings <ItemsCount> 6 items </ItemsCount>
          </Title>

          <Card>
            <CardHeader>
              <InfoBlock>
                <InfoLabel> Created on </InfoLabel>
                <InfoText> 12 March 2015 </InfoText>
              </InfoBlock>

              <InfoBlock>
                <InfoLabel> Rating </InfoLabel>
                <Rating rating={3} />
              </InfoBlock>

              <InfoBlock>
                <InfoLabel> Duration </InfoLabel>
                <InfoText> 15 minutes </InfoText>
              </InfoBlock>

              <PlayButton />
            </CardHeader>

            <InfoBlock>
              <InfoLabel> Transcript </InfoLabel>
              <InfoText>
                They failed to recognize the difficulty of some of the remaining tasks.
                Progress slowed and in 1974, in response to the criticism of Sir James
                Lighthill[26] and ongoing pressure from the US Congress to fund more productive projects,
                both the U.S. and British governments cut off exploratory research in AI.
              </InfoText>
            </InfoBlock>
          </Card>
        </Content>
      </Background>
    )
  }
}

export default withRouter(Recordings)
