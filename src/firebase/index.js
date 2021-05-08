
import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: "ecommerce-161cc.firebaseapp.com",
    projectId: "ecommerce-161cc",
    storageBucket: "ecommerce-161cc.appspot.com",
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
})

export const getFirebase = () => {
    return app;
}

export const getFirestore = () =>{
    return firebase.firestore(app)
}