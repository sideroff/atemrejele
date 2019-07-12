import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import qs from 'query-string'

export default function ProtectedRoute({ flag, component: Component, redirectUrl='/authenticate', ...rest}) {

  // adds a redirectUrl to query string so we can redirect
  // the user once he logs in
  const queryString = rest.location.pathname === '/authenticate'
    ? ''
    : '?' + qs.stringify({redirectUrl: rest.location.pathname})

  return (
    <Route {...rest} render={() =>
      !!flag
      ? <Component />
      : <Redirect to={redirectUrl + queryString}/>
    }/>
  )
}
