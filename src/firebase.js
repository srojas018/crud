import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBIH_H-EyMQ7VWdnCGuqZZoIituL4fb0U4",
    authDomain: "crud-c530a.firebaseapp.com",
    projectId: "crud-c530a",
    storageBucket: "crud-c530a.appspot.com",
    messagingSenderId: "487550835544",
    appId: "1:487550835544:web:c7e2d50cffc435b4cc632d"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig)