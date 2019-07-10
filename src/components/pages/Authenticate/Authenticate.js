import React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import { StyledFirebaseAuth } from 'react-firebaseui'
import firebase from 'firebase'
import 'firebase/auth'


import { firebaseUIConfig } from 'config/fire'
import { white, black } from 'config/styleConfig'


const Page = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url('/img/login_background.jpeg');
  background-size: cover;
  justify-content: center;
  align-items: center;
`
const modalBackgroundColor = 'rgba(20, 14, 14, 0.4)'
const modalBorderColor = 'rgba(20, 14, 14, 0.5)'

const AuthModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40%;
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
  <Page>
    <AuthModal>
        <ModalHeading>Atemrejele</ModalHeading>
        <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={firebase.auth()}/>
    </AuthModal>
  </Page>
)
