import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCbe_r4O3Deb5ibTCMFP2jEBqrrKAvAOeM",
    authDomain: "fb-clone-a4036.firebaseapp.com",
    projectId: "fb-clone-a4036",
    storageBucket: "fb-clone-a4036.appspot.com",
    messagingSenderId: "829195304149",
    appId: "1:829195304149:web:d3e4b46166a2e63570b65c",
    measurementId: "G-9CM5FE5WRK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
