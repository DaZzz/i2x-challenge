import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import starUrl from '../images/star.svg'
import starEmptyUrl from '../images/star-empty.svg'

const Wrapper = styled.div`
  display: block;
  padding-top: 5px;
`

const Star = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-image: url(${props => props.empty ? starEmptyUrl : starUrl});
  background-size: 100%;
  background-repeat: no-repeat;
  margin-right: 2px;
`

const Rating = ({ rating }) =>
  <Wrapper>
    { Array(rating).fill(0).map((_, i) => <Star key={i} />) }
    { Array(5 - rating).fill(0).map((_, i) => <Star key={rating + i} empty />) }
  </Wrapper>

Rating.propTypes = {
  rating: PropTypes.number
}

Rating.defaultProps = {
  rating: 0
}

export default Rating
