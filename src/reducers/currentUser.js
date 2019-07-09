import {
  SET_CURRENT_USER
} from 'actions/actionTypes'

const defaultState = {
  currentUser: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload }
    default:
      return state
  }
}