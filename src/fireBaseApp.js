import firebase from "firebase/app"
import 'firebase/firebase-firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBRNdIVvFK02fEyPOy8QPjSb-bX9cOq96g",
    authDomain: "exresice.firebaseapp.com",
    projectId: "exresice",
    storageBucket: "exresice.appspot.com",
    messagingSenderId: "484455022237",
    appId: "1:484455022237:web:b76ccd69443a459b6e9e74",
    measurementId: "G-5M07Y58FSK"
  };

  firebase.initializeApp(firebaseConfig)

export default firebase