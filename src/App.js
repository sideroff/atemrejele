import React from 'react'
import { Provider, useDispatch } from 'react-redux'

import { Router } from 'components/root'
import { setTestFlag } from 'actions'
import fire from 'config/fire'
import store from './store'

function App() {

  React.useEffect(() => {
    store.dispatch(setTestFlag(false))
  }, [])

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
