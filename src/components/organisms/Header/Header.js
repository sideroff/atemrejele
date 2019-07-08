import React from 'react'

import { Link } from 'components/atoms'
import { HeaderNavigation } from 'components/molecules'
import styled from '@emotion/styled'
import { white, primaryColor } from 'config/styleConfig'

const StickyHeader = styled.header`
  position: sticky;
`

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
  z-index: 1;
  
  &:before {
    transform: rotate(-45deg);
    content: '✓';
    font-weight: bold;
    color: ${white};
    padding-right: 5px;
    padding-bottom: 5px;
  }
`


// TODO: make it like
// |   |
// |   |
//  \ / 
//   v   
// so it can come down as an animation when hovered
export default function Header() {
  return (
    <StickyHeader>
      <Link to='/'>
        <Ticket />
      </Link>
      <HeaderNavigation />
    </StickyHeader>
  )
}