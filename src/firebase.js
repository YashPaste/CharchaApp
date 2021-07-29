import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB4H0xndDaHGdKrTE3b-lakn72JojnNutw",
    authDomain: "unichat-fc43a.firebaseapp.com",
    projectId: "unichat-fc43a",
    storageBucket: "unichat-fc43a.appspot.com",
    messagingSenderId: "930304619331",
    appId: "1:930304619331:web:b545d46d798b58f344b5f6",
    measurementId: "G-CNGQHD2E0V"
}).auth()