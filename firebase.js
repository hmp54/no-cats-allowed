import {initializeApp} from "firebase/app"; 
import {initializeFirestore} from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDHxyWt5HaiDBRftKggHybWvcbrqZxF0A0",
  authDomain: "no-cats-allowed-55dda.firebaseapp.com",
  projectId: "no-cats-allowed-55dda",
  storageBucket: "no-cats-allowed-55dda.appspot.com",
  messagingSenderId: "1046560042907",
  appId: "1:1046560042907:web:e418860593339188d0bb3e"
};

const firebase = initializeApp(firebaseConfig)
const db = initializeFirestore()

export default {firebase, db }