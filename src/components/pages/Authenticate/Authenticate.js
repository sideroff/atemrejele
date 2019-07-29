import React from 'react'
import styled from '@emotion/styled'
import { StyledFirebaseAuth } from 'react-firebaseui'
import firebase from 'firebase/app'
import 'firebase/auth'

import { BackgroundCenteredPage } from 'components/molecules'

import { firebaseUIConfig } from 'config/fire'
import { white } from 'config/styleConfig'

const modalBackgroundColor = 'rgba(20, 14, 14, 0.4)'
const modalBorderColor = 'rgba(20, 14, 14, 0.5)'

const AuthModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40%;
  min-height: 300px;
  min-width: 15%;
  border: 1px solid ${modalBorderColor};
  background-color: ${modalBackgroundColor};
  border-radius: 8px;
`

const ModalHeading = styled.h3`
  text-align: center;
  color: ${white};
  font-size: 2.5em;
`

export default () => (
  <BackgroundCenteredPage>
    <AuthModal>
        <ModalHeading>Atemrejele</ModalHeading>
        <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={firebase.auth()}/>
    </AuthModal>
  </BackgroundCenteredPage>
)
