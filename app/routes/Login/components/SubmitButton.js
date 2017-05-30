import React from 'react'
import styled, { keyframes } from 'styled-components'
import spinnerUrl from '../images/spinner.png'

const Input = styled.input`
  display: block;
  text-align: center;
  position: absolute;
  background: transparent;
  border: none;
  appearence: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: opacity 0.2s ease;
`

const spinnerKeyframes = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  transform: scale(2);
  opacity: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  width: 24px;
  height: 24px;
  position: absolute;
  z-index: 2;
  top: calc(50% - 12px);
  left: calc(50% - 12px);
  background-image: url(${spinnerUrl});
  background-size: 24px;
  background-position: center;
  animation: ${spinnerKeyframes} 2s infinite linear;
`

const Wrapper = styled.div`
  display: block;
  width: 100%;
  height: 42px;
  background-color: #ff7f00;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  padding: 11px;
  border: none;
  margin-top: 24px;
  position: relative;

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

  ${Input} {
    opacity: ${props => props.loading ? 0 : 1};
    pointer-events: ${props => props.loading ? 'none' : 'auto'};
  }

  ${Spinner} {
    transform: ${props => props.loading ? 'scale(1)' : 'scale(2)'};;
    opacity: ${props => props.loading ? 1 : 0};
  }
`

const SubmitButton = props =>
  <Wrapper loading={props.loading}>
    <Input
      type="submit"
      value={props.text}
    />
    <Spinner />
  </Wrapper>

export default SubmitButton
