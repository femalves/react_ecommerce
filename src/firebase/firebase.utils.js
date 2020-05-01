import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyARxTjimSlZ8e20EwphN2p6WTPtlKeJYcM",
  authDomain: "silverlinedb.firebaseapp.com",
  databaseURL: "https://silverlinedb.firebaseio.com",
  projectId: "silverlinedb",
  storageBucket: "silverlinedb.appspot.com",
  messagingSenderId: "163001036014",
  appId: "1:163001036014:web:9789201f9db3678b7017ff",
  measurementId: "G-SJ3QVV3NL2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
