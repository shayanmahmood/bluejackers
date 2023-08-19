// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBsn1nHGhWr-CBuf1oa0Chr5WEcQQ1kBTM",
    authDomain: "bluejackers-01.firebaseapp.com",
    databaseURL: "https://bluejackers-01-default-rtdb.firebaseio.com",
    projectId: "bluejackers-01",
    storageBucket: "bluejackers-01.appspot.com",
    messagingSenderId: "538414136126",
    appId: "1:538414136126:web:7b513f6427178a281d8a6f",
    measurementId: "G-ZY66ZPZP73"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

const db = getDatabase()
export { db }

