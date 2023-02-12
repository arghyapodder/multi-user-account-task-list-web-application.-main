import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBCVfBvg5mzf8yvUf76VcMuCL2LZi53so",
  authDomain: "todo-36cff.firebaseapp.com",
  projectId: "todo-36cff",
  storageBucket: "todo-36cff.appspot.com",
  messagingSenderId: "1023767295625",
  appId: "1:1023767295625:web:a7f5bb9636a1c8fd2b7858",
  measurementId: "G-WVF2E1F1JT"
};

  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db} 



