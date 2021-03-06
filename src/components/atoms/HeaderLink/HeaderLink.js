import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

import { white, primaryColor } from 'config/styleConfig'

const Link = ({disabled, ...rest}) => {

  const onClick = e => disabled ? e.preventDefault() : undefined;

  return <NavLink onClick={onClick} {...rest} activeClassName='active' disabled={disabled}/>
}

export default styled(Link)`
  text-decoration: none;
  color: ${white};
  font-weight: 550;
  transition: font-weight 0.3s, color 0.3s, margin 0.3s;
  pointer-events: ${({disabled}) => disabled ? 'none' : 'auto'};
  &:hover, &.active {
    color: ${primaryColor};
  }
`
