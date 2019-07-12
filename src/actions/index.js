import {
  AUTH_CHANGE,
} from './actionTypes'

export const authChange = payload => dispatch => {
  dispatch({type: AUTH_CHANGE, payload})
}