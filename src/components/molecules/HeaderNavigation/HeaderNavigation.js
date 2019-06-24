import React from 'react'
import styled from '@emotion/styled'

import { Link } from 'components/atoms'

import { headerLinks } from 'utils/config'
import { primaryBackgroundColor } from 'utils/styleConfig'

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5em 0 0.5em 0;
  background-color: ${primaryBackgroundColor};
`

const HeaderNavigation = () => (
  <LinksWrapper>
    {headerLinks.map(({ url, exact, label }) => <Link to={url} exact={exact} key={url}>{label}</Link>)}
  </LinksWrapper>
)

export default HeaderNavigation
