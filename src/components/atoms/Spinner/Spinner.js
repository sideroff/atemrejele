import React from 'react'
import styled from '@emotion/styled'
import { spinnerColor } from 'config/styleConfig'

const StyledSpinner = styled.div`
     display: inline-block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

  & div {
    display: inline-block;
    position: absolute;
    left: 6px;
    width: 13px;
    background: ${props => props.color ? props.color : spinnerColor};
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  & div.first {
    left: 6px;
    animation-delay: -0.24s;
  }
  & div.second {
    left: 26px;
    animation-delay: -0.12s;
  }
  & div.third {
    left: 45px;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0% {
      top: 6px;
      height: 51px;
    }
    50%, 100% {
      top: 19px;
      height: 26px;
    }
  }
`
export const Spinner = props =>
  <StyledSpinner {...props}>
    <div className='first'></div>
    <div className='second'></div>
    <div className='third'></div>
  </StyledSpinner>

export const CenteredSpinner = 1;