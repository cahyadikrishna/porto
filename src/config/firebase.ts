// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBoAXfozymU-b2SY_WEwd3rgHQnsLWIxPk',
  authDomain: 'cahyadi-porto.firebaseapp.com',
  projectId: 'cahyadi-porto',
  storageBucket: 'cahyadi-porto.appspot.com',
  messagingSenderId: '424998078731',
  appId: '1:424998078731:web:bd65edebca4f74f3327a0e',
  measurementId: 'G-MQFP5MY4J1',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export { analytics, db }
