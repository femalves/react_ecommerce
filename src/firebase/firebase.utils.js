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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
