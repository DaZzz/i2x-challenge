import React, { Component } from 'react'
import styled, { keyframes, css } from 'styled-components'
import playUrl from '../images/play.svg'
import pauseUrl from '../images/pause.svg'
import Rating from './Rating'
import format from 'date-fns/format'

const wrapperKeyframes = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }

  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`

const animationDelay = css`
  ${
    new Array(10)
      .fill(0)
      .map((_, index) => `&:nth-child(${index}) { animation-delay: ${index * 0.1}s; }`)
      .join(' ')
  }
`

const Wrapper = styled.div`
  padding: 24px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 24px;
  transform: translateY(100px);
  opacity: 0;
  animation: ${wrapperKeyframes} 0.4s ease forwards;
  ${animationDelay}
`

const Header = styled.div`
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

const formatDate = dateString => {
  const date = new Date(dateString)
  return `${format(date, 'Do')} of ${format(date, 'MMMM YYYY')}`
}

const formatTime = time => {
  const minutes = Math.floor(time / 60)
  const seconds = time - minutes * 60
  let result = `${seconds}s`

  if (minutes > 0) {
    result = `${minutes}m ${result}`
  }

  return result
}

const Card = (props) =>
  <Wrapper>
    <Header>
      <InfoBlock>
        <InfoLabel> Created on </InfoLabel>
        <InfoText> {formatDate(props.created)} </InfoText>
      </InfoBlock>

      <InfoBlock>
        <InfoLabel> Rating </InfoLabel>
        <Rating rating={props.rating} />
      </InfoBlock>

      <InfoBlock>
        <InfoLabel> Duration </InfoLabel>
        <InfoText> {formatTime(props.duration)} </InfoText>
      </InfoBlock>

      <PlayButton />
    </Header>

    <InfoBlock>
      <InfoLabel> Transcript </InfoLabel>
      <InfoText> {props.transcript} </InfoText>
    </InfoBlock>
  </Wrapper>

export default Card
