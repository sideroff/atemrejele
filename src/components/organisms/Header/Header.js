import React from 'react'

import { Link } from 'components/atoms'
import { HeaderNavigation } from 'components/molecules'
import styled from '@emotion/styled'
import { white, primaryColor } from 'utils/styleConfig'

const Ticket = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: ${primaryColor};
  transform: rotate(45deg);
  top: -20px;
  left: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  
  &:before {
    transform: rotate(-45deg);
    content: '✓';
    font-weight: bold;
    color: ${white};
    padding-right: 5px;
    padding-bottom: 5px;
  }
`


export default function Header() {

  return (
    <header>
      <Link to='/'>
        <Ticket />
      </Link>
      <HeaderNavigation />
    </header>
  )
}