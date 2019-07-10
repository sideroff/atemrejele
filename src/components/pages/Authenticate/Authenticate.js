import React from 'react'
import { useSelector } from 'react-redux'
import * as firebase from 'firebase'

export default function Authenticate(props) {
  console.log('here')
  debugger

  let currentUser = useSelector(state => state.currentUser)

  let [authProvider, setAuthProvider] = React.useState(null)

  React.useEffect(() => {
    const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()
    setAuthProvider(facebookAuthProvider)

    firebase.auth().signInWithPopup(facebookAuthProvider).then(result => {
      debugger
      // This gives you a Facebook Access Token.
      var token = result.credential.accessToken
      // The signed-in user info.
      var user = result.user
    }).catch(error => {

    })
  }, [])


  // console.log('render ', authProvider)
  return (
    <div>
      Authenticate page
    </div>
  )
}