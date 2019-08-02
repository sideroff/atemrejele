import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import {
  AUTH_CHANGE,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_SUCCESS,
  PROJECT_CREATE_FAILURE,

  PROJECTS_GET_REQUEST,
  PROJECTS_GET_SUCCESS,
  PROJECTS_GET_FAILURE,
} from './actionTypes'

export const authChange = payload => {
  return { type: AUTH_CHANGE, payload }
}

export const logoutAction = () => dispatch => {
  firebase.auth().signOut()
  .catch(function(error) {
    dispatch({type: 'LOGOUT_UNSUCCESSFUL'})
  });
}

export const createProject = project => dispatch => {
  dispatch({type: PROJECT_CREATE_REQUEST})
  firebase.firestore().collection('projects').add(project).then(result=> {
    dispatch({type: PROJECT_CREATE_SUCCESS, payload: result})
  }).catch(error => {
    dispatch({type: PROJECT_CREATE_FAILURE, payload: error})
  })
}

export const getProjects = () => dispatch => {
  dispatch({type: PROJECTS_GET_REQUEST})
  firebase.firestore().collection('projects').get().then(result=> {
    dispatch({type: PROJECTS_GET_SUCCESS, payload: result})
  }).catch(error => {
    dispatch({type: PROJECTS_GET_FAILURE, payload: error})
  })
}