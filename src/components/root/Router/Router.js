import React from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import { ProtectedRoute } from 'components/atoms'
import { Header } from 'components/organisms'
import { Authenticate } from 'components/pages';

import { publicRoutes, privateRoutes } from 'config/config'

export default function Router() {

  const privateRoutesFlag = useSelector(state => state.flags.testFlag)

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
