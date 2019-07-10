import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'

import { Router } from 'components/root'
import 'config/fire'

import { authChange } from 'actions'
import store from 'config/store'

function App() {

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => store.dispatch(authChange(user)))
  }, [])

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
