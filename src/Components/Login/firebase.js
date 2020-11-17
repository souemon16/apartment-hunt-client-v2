import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHGroVazen6rYXXnwn7N1ZMvFxes76_Ww",
  authDomain: "instagram-clone-d40ab.firebaseapp.com",
  databaseURL: "https://instagram-clone-d40ab.firebaseio.com",
  projectId: "instagram-clone-d40ab",
  storageBucket: "instagram-clone-d40ab.appspot.com",
  messagingSenderId: "1022349442043",
  appId: "1:1022349442043:web:6c486ecca5624cc127295e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default auth;
export { googleProvider };
