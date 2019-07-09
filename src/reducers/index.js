import { combineReducers } from 'utils'

import currentUser from './currentUser'
import flags from './flags'

export default combineReducers({
  currentUser,
  flags,
})