import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ThemeProvider } from 'emotion-theming'
import firebase from 'firebase/app'
import 'firebase/auth'

import { Router } from 'components/root'
import { AppLoadingOverlay } from 'components/molecules'
import 'config/fire'

import { authChange } from 'actions'

import { themes } from 'config/styleConfig'

function App() {
  const dispatch = useDispatch()

  const isAppInitialized = useSelector(state => state.flags.firebaseInitialLoad)
  const themeName = useSelector(state => state.flags.themeName)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => dispatch(authChange(user)))
  }, [dispatch])


  return (
    <ThemeProvider theme={themes[themeName]}>
      {isAppInitialized
        ? <Router />
        : <AppLoadingOverlay />
      }
    </ ThemeProvider>
  )
}

export default App
