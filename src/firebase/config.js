import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const CONFIG = {
  apiKey: 'AIzaSyCLtLddRIbDJWl3D7MZ2ias450s9GnKqJg',
  authDomain: 'nc-blog-705d8.firebaseapp.com',
  projectId: 'nc-blog-705d8',
  storageBucket: 'nc-blog-705d8.appspot.com',
  messagingSenderId: '266133037616',
  appId: '1:266133037616:web:c9a5c972b904531a9983f5',
  measurementId: 'G-9W6MRYY1KJ'
}

// init firebase
initializeApp( CONFIG );

// init firestore service
const db = getFirestore();

export { db }