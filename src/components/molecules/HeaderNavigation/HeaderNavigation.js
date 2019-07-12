import React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

import { HeaderLink } from 'components/atoms'

import { headerLinks } from 'config/navigation'
import { primaryBackgroundColor } from 'config/styleConfig'

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5em 0 0.5em 0;
  background-color: ${primaryBackgroundColor};
`

const HeaderNavigation = () => {
  const disabled = useSelector(state => !state.currentUser)

  return(
    <LinksWrapper>
      {headerLinks.map(({ url, exact, label }) => <HeaderLink disabled={disabled} to={url} exact={exact} key={url}>{label}</HeaderLink>)}
    </LinksWrapper>
  )
}

export default HeaderNavigation
