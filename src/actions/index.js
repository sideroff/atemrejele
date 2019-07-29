import firebase from 'firebase/app'
import 'firebase/auth'

import {
  AUTH_CHANGE,
} from './actionTypes'

export const authChange = payload => {
  return { type: AUTH_CHANGE, payload }
}

export const logoutAction = () => dispatch => {
  firebase.auth().signOut()
  .catch(function(error) {
    dispatch({type: 'LOGOUT_UNSUCCESSFUL'})
  });
}