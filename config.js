import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDjGgiVpOh9S3oXj7osalOLp02bU-lzUPk",
  authDomain: "pro-c73---let-s-ride.firebaseapp.com",
  projectId: "pro-c73---let-s-ride",
  storageBucket: "pro-c73---let-s-ride.appspot.com",
  messagingSenderId: "637225328193",
  appId: "1:637225328193:web:71f98f982c4f92706530c0"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

