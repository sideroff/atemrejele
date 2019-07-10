import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import { ProtectedRoute } from 'components/atoms'
import { Header } from 'components/organisms'
import { Authenticate } from 'components/pages'

import { setTestFlag } from 'actions'

import { publicRoutes, privateRoutes } from 'config/config'

export default function Router() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(setTestFlag(false))
  }, [dispatch])

  const privateRoutesFlag = useSelector(state => !!state.currentUser)

  return (
    <BrowserRouter>
      <Header />

      <Switch>
        {publicRoutes.map(({ exact, url, component }) =>
          <Route exact={exact} path={url} component={component} key={url} />
        )}

        {privateRoutes.map(({ exact, url, component }) =>
          <ProtectedRoute flag={privateRoutesFlag} exact={exact} path={url} component={component} key={url} />
        )}

        <Route exact={true} path='/authenticate' component={Authenticate}/>
      </Switch>
    </BrowserRouter>
  )
}
