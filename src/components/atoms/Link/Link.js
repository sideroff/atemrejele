import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'


import { white, primaryColor } from 'utils/styleConfig'

const Link = props => <NavLink {...props} activeClassName='active' />

export default styled(Link)`
  text-decoration: none;
  color: ${white};
  font-weight: 550;
  transition: font-weight 0.3s, color 0.3s, margin 0.3s;

  &:hover, &.active {
    color: ${primaryColor};
    font-weight: 900;
  }
`