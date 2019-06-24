import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'


import { white, primaryColor } from 'utils/styleConfig'

const Link = props => <NavLink {...props} activeClassName='active' />

export default styled(Link)`
  text-decoration: none;
  color: ${white};
  font-weight: bold;

  &.active {
    color: ${primaryColor};
  }
`