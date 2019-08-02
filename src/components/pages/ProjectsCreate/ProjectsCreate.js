import React from 'react'
import { useDispatch } from 'react-redux'
import styled from '@emotion/styled'

import { Page } from 'components/atoms'
import { ProjectCreateForm } from 'components/organisms'
import { primaryBlackColor } from 'config/styleConfig'

import { createProject } from 'actions'

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

export default props => {

  const dispatch = useDispatch()

  const handleSubmit = values => {
    dispatch(createProject(values))
  }

  return (
    <Page>
      <Wrapper>
        <H3>{i18n.t('create-project')}</H3>
        <StyledProjectCreateForm onSubmit={handleSubmit}/>
      </Wrapper>
    </Page>
  )
}