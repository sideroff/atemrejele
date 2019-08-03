import React from 'react'
import styled from '@emotion/styled'
import i18n from 'i18n'

import { Link } from 'components/atoms'

const CenteredDiv = styled.div`
display: flex;
height: 100%;
justify-content: center;
align-items: center;
`

const CenteredTextSpan = styled.span`
text-align: center;
`

export default () => (
  <CenteredDiv>
    <CenteredTextSpan>
      <span>{i18n.t('dashboard-explanation-1')}<br />{i18n.t('dashboard-explanation-2')} </span>
      <Link to='/projects/create'>{i18n.t('create')} </Link>
      <span>{i18n.t('or')} </span>
      <Link to='/projects'>{i18n.t('choose')} </Link>
      <span>{i18n.t('dashboard-explanation-3')}</span>
    </CenteredTextSpan>
  </CenteredDiv>
)
