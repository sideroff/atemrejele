import {
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE
} from 'actions/actionTypes'

const defaultState = {
  testFlag: false
}

export default function flags(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCESS:
      return { ...action.payload }
    default:
      return state
  }
}