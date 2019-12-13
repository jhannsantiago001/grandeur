import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBUVCm5QKKzOOlU8mYYFnGb486FdKtVZ-c",
    authDomain: "grandeur-db.firebaseapp.com",
    databaseURL: "https://grandeur-db.firebaseio.com",
    projectId: "grandeur-db",
    storageBucket: "grandeur-db.appspot.com",
    messagingSenderId: "649933089581",
    appId: "1:649933089581:web:128118a76df176ac0f81a4",
    measurementId: "G-5XB7B5XLVV"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;