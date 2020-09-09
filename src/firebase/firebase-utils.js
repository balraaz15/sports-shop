import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDV-44srRwrzv6ga9-FHJPubVqIUK8DisM",
  authDomain: "fly-sports.firebaseapp.com",
  databaseURL: "https://fly-sports.firebaseio.com",
  projectId: "fly-sports",
  storageBucket: "fly-sports.appspot.com",
  messagingSenderId: "1011958265727",
  appId: "1:1011958265727:web:42d815f59ad019d4218c4a",
  measurementId: "G-HEHWM8W6Q1",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;