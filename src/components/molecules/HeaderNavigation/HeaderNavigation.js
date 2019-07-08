import React from 'react'
import styled from '@emotion/styled'

import { HeaderLink } from 'components/atoms'

import { headerLinks } from 'config/config'
import { primaryBackgroundColor } from 'config/styleConfig'

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5em 0 0.5em 0;
  background-color: ${primaryBackgroundColor};
`

const HeaderNavigation = () => (
  <LinksWrapper>
    {headerLinks.map(({ url, exact, label }) => <HeaderLink to={url} exact={exact} key={url}>{label}</HeaderLink>)}
  </LinksWrapper>
)

export default HeaderNavigation
