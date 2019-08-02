import {
  PROJECT_CREATE_SUCCESS,
  PROJECTS_GET_SUCCESS,
} from 'actions/actionTypes'

const defaultState = null

export default function projects(state = defaultState, action) {
  switch (action.type) {
    case PROJECT_CREATE_SUCCESS:
      return state === null ? [action.payload] : [...state, action.payload]
      case PROJECTS_GET_SUCCESS:
        return action.payload.docs.map((d, i) => ({...d.data(), id: d.id}))
    default:
      return state
  }
}