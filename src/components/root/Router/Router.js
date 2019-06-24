import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import { Header } from 'components/organisms'
import { pages } from 'utils/config'

export default function Router() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        {pages.map(({ exact, url, component }) =>
          <Route exact={exact} path={url} component={component} key={url} />
        )}
      </Switch>
    </BrowserRouter>
  )
}
