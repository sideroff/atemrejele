import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import { pages } from 'config'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {pages.map(({ exact, url, component }) =>
          <Route exact={exact} path={url} component={component} />
        )}
      </Switch>
    </BrowserRouter>
  )
}
