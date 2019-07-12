import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'


import { Router } from 'components/root'
import { AppLoadingOverlay } from 'components/molecules'
import 'config/fire'

import { authChange } from 'actions'

function App() {
  const dispatch = useDispatch()

  const isAppInitialized = useSelector(state => state.flags.firebaseInitialLoad)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => dispatch(authChange(user)))
  }, [dispatch])


  return isAppInitialized
  ? <Router />
  : <AppLoadingOverlay />
}

export default App
