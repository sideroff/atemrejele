import {
  SET_TEST_FLAG,
  AUTH_CHANGE,
} from './actionTypes'

export const setTestFlag = payload => dispatch => {
  dispatch({type: SET_TEST_FLAG, payload})

  setTimeout(() => {
    dispatch({type: SET_TEST_FLAG, payload: !payload})
  }, 1000)
}

export const authChange = payload => dispatch => {
  dispatch({type: AUTH_CHANGE, payload})
}