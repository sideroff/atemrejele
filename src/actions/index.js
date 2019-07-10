import {
  SET_TEST_FLAG, LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS
} from './actionTypes'

export const setTestFlag = payload => dispatch => {
  dispatch({type: SET_TEST_FLAG, payload})

  setTimeout(() => {
    dispatch({type: SET_TEST_FLAG, payload: !payload})
  }, 1000)
}

export const login = payload => dispatch => {
  dispatch({type: LOGIN_REQUEST, payload})

  setTimeout(() => { dispatch({type: LOGIN_REQUEST_SUCCESS, payload: { username: 'niki' } }) })
}