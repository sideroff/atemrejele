import React from 'react'
import styled from '@emotion/styled'

import { Page } from 'components/atoms'
import { ProjectCreateForm } from 'components/organisms'
import { primaryBlackColor } from 'config/styleConfig'

import i18n from 'i18n'


const StyledProjectCreateForm = styled(ProjectCreateForm)``

const Wrapper = styled.div`
  max-width: 400px;
  margin-left: 50px;
  padding: 0 10px;
`

const H3 = styled.h3`
  color: ${primaryBlackColor};
`

export default props => (
  <Page>
    <Wrapper>
      <H3>{i18n.t('create-project')}</H3>
      <StyledProjectCreateForm />
    </Wrapper>
  </Page>
)