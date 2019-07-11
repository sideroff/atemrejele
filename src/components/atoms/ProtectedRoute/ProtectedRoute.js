import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { history } from 'config/navigation'
// import qs from 'query-string'

export default function ProtectedRoute({ flag, component: Component, redirectUrl='/authenticate', ...rest}) {

  // TODO: fix this
  // if (!flag) {
  //   console.log('should redirect ', history)
  //   debugger
  //   history.push()
  // }

  return (
    <Route {...rest} render={() =>
      !!flag
      ? <Component />
      : <Redirect to={redirectUrl}/>
    }/>
  )
}
