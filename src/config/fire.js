// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDXOmWDDZ50zSHmLyFNyt9xAUNiHWPYtKc',
  authDomain: 'atemrejele.firebaseapp.com',
  databaseURL: 'https://atemrejele.firebaseio.com',
  projectId: 'atemrejele',
  storageBucket: 'atemrejele.appspot.com',
  messagingSenderId: '584723988743',
  appId: '1:584723988743:web:8186c2173f733bc7'
}

// Initialize default Firebase app
// if we need another init
// get handle by assigning the call to a var
console.log('init fire app')
firebase.initializeApp(firebaseConfig)