import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

import { primaryColor } from 'utils/styleConfig'

const Link = props => <NavLink {...props} activeClassName='active' />

export default styled(Link)`
  text-decoration: none;
  color: ${primaryColor};
  font-weight: 900;
  transition: text-shadow 0.3s;

  &:hover, &.active {
    text-shadow:
      -0.1px -0.1px 0 ${primaryColor},
      0.1px -0.1px 0 ${primaryColor},
      -0.1px 0.1px 0 ${primaryColor},
      0.1px 0.1px 0 ${primaryColor};
  }
`