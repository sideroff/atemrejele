import { SET_TEST_FLAG } from 'actions/actionTypes'

const defaultState = {
  testFlag: false
}

export default function flags(state = defaultState, action) {
  switch (action.type) {
    case SET_TEST_FLAG:
      return {...state, testFlag: action.payload}
    default:
      return state
  }
}