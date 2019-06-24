import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const Link = props => <NavLink {...props} activeClassName='active' />

export default styled(Link)`
  color: black;
  font-weight: bold;

  &.active {
    color: red;
  }
`