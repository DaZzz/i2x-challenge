import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
  background-image: url(${props => props.playing ? pauseUrl : playUrl });
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

class Card extends Component {
  static propTypes = {
    transcript: PropTypes.string,
    rating: PropTypes.number,
    audioSource: PropTypes.string,
    isPlaying: PropTypes.bool,
    onPlay: PropTypes.func
  }

  componentWillReceiveProps (nextProps) {
      if (!this.audioRef) return

      if (!this.props.isPlaying && nextProps.isPlaying) {
        this.audioRef.play()
      } else {
        this.audioRef.currentTime = 0
        this.audioRef.pause()
      }
  }

  get formattedDate () {
    const date = new Date(this.props.created)
    return `${format(date, 'Do')} of ${format(date, 'MMMM YYYY')}`
  }

  get formattedDuration () {
    const { duration } = this.props
    const minutes = Math.floor(duration / 60)
    const seconds = duration - minutes * 60
    let result = `${seconds}s`

    if (minutes > 0) {
      result = `${minutes}m ${result}`
    }

    return result
  }

  render () {
    const { transcript, rating, audioSource, onPlay, isPlaying } = this.props

    return (
      <Wrapper>
        <Header>
          <InfoBlock>
            <InfoLabel> Created on </InfoLabel>
            <InfoText> {this.formattedDate} </InfoText>
          </InfoBlock>

          <InfoBlock>
            <InfoLabel> Rating </InfoLabel>
            <Rating rating={rating} />
          </InfoBlock>

          <InfoBlock>
            <InfoLabel> Duration </InfoLabel>
            <InfoText> {this.formattedDuration} </InfoText>
          </InfoBlock>

          <PlayButton playing={isPlaying} onClick={onPlay} />
          <audio ref={ref => { this.audioRef = ref }} src={audioSource} />
        </Header>

        <InfoBlock>
          <InfoLabel> Transcript </InfoLabel>
          <InfoText> {transcript} </InfoText>
        </InfoBlock>
      </Wrapper>
    )
  }
}

export default Card
