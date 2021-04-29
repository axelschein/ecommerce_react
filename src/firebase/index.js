
import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyD6vMXFhOmeXpEzgFZd1GVkjZLfrIY-j7U",
    authDomain: "ecommerce-161cc.firebaseapp.com",
    projectId: "ecommerce-161cc",
    storageBucket: "ecommerce-161cc.appspot.com",
    messagingSenderId: "1020372820894",
    appId: "1:1020372820894:web:ca4305717835eab28fac8f"
})

export const getFirebase = () => {
    return app;
}

export const getFirestore = () =>{
    return firebase.firestore(app)
}