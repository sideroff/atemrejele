import {
  AUTH_CHANGE,
  PROJECTS_GET,
  PROJECT_CREATE,
} from 'actions/actionTypes'

const requestsToFlagName = {
  [PROJECTS_GET]: 'isGettingProjects',
  [PROJECT_CREATE]: 'isCreatingProject',
}


const defaultState = {
  firebaseInitialLoad: false,
  themeName: 'default'
}

export default function flags(state = defaultState, action) {
  const request = action.type.substring(0, action.type.lastIndexOf('_'))

  const flagName = requestsToFlagName[request]

  if (flagName) return {...state, [flagName]: !state[flagName]}

  switch (action.type) {
    case AUTH_CHANGE:
      return {...state, firebaseInitialLoad: true}
    default:
      return state
  }
}