import { AUTH_CHANGE } from 'actions/actionTypes'

const defaultState = {
  firebaseInitialLoad: false
}

export default function flags(state = defaultState, action) {
  switch (action.type) {
    case AUTH_CHANGE:
      return {...state, firebaseInitialLoad: true}
    default:
      return state
  }
}