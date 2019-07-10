import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function ProtectedRoute({ flag, component: Component, redirectUrl='/authenticate', ...rest}) {
  return (
    <Route {...rest} render={() =>
      !!flag
      ? <Component />
      : <Redirect to={redirectUrl}/>
    }/>
  )
}
