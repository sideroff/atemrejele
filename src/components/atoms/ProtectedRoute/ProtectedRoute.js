import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import qs from 'query-string'

export default function ProtectedRoute({ flag, component: Component, redirectUrl='/authenticate', ...rest}) {
  debugger;
  return (
    <Route {...rest} render={() =>
      !!flag
      ? <Component />
      : <Redirect to={redirectUrl}/>
    }/>
  )
}
