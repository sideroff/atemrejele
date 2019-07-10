import {
  AUTH_CHANGE
} from 'actions/actionTypes'

const defaultState = null

export default function flags(state = defaultState, action) {
  switch (action.type) {
    case AUTH_CHANGE:
      return action.payload
    default:
      return state
  }
}