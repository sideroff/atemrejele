import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import currentUser from './currentUser'
import flags from './flags'

export default combineReducers({
  form: formReducer,

  currentUser,
  flags,
})