import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDnGz2vc408SNpDZMlD6OIMZ9c40NWCRwU",
  authDomain: "facebook-clone-aacb5.firebaseapp.com",
  projectId: "facebook-clone-aacb5",
  storageBucket: "facebook-clone-aacb5.appspot.com",
  messagingSenderId: "397070873611",
  appId: "1:397070873611:web:4096887e5f14e82049830e"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export { db, storage };