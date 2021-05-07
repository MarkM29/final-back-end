import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAzNuM6FLzGgcOSgkOD05K8XwKRqbDJG1Q",
  authDomain: "final-back-end-611ee.firebaseapp.com",
  projectId: "final-back-end-611ee",
  storageBucket: "final-back-end-611ee.appspot.com",
  messagingSenderId: "952995137430",
  appId: "1:952995137430:web:25e59dd5d46d4e74883fb7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
