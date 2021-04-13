import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCIu-Qfk4F5F9xDsVMy6TDsJJSNXqoCmZs",
  authDomain: "crown-db-online-shop.firebaseapp.com",
  projectId: "crown-db-online-shop",
  storageBucket: "crown-db-online-shop.appspot.com",
  messagingSenderId: "405898739459",
  appId: "1:405898739459:web:c01f750004427657f9f336",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
