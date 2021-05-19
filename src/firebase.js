import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA0kAMWqkBDd-SU9mFa0i7OqafuEO5R7IA",
  authDomain: "disneyclone-d4358.firebaseapp.com",
  projectId: "disneyclone-d4358",
  storageBucket: "disneyclone-d4358.appspot.com",
  messagingSenderId: "604762811595",
  appId: "1:604762811595:web:99c9df66298093c5787f4e",
  measurementId: "G-3P76LZTMN3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
