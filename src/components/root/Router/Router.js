import React from 'react'
import { useSelector } from 'react-redux'
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom'

import { ProtectedRoute } from 'components/atoms'
import { Header } from 'components/organisms'
import { Authenticate } from 'components/pages'

import { history, publicRoutes, privateRoutes } from 'config/navigation'

export default function _Router() {
  const privateRoutesFlag = useSelector(state => !!state.currentUser)

  return (
    <Router history={history}>
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
    </Router>
  )
}
