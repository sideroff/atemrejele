import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import currentUser from './currentUser'
import flags from './flags'

import projects from './projects'

export default combineReducers({
  form: formReducer,

  currentUser,
  flags,

  projects,
})