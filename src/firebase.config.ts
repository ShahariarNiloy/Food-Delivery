import {getApp, getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBVtgz2qHMZUNJtTqQ6pIMQvZs72mdcvd0",
    authDomain: "food-delivery-8b3f0.firebaseapp.com",
    databaseURL: "https://food-delivery-8b3f0-default-rtdb.firebaseio.com",
    projectId: "food-delivery-8b3f0",
    storageBucket: "food-delivery-8b3f0.appspot.com",
    messagingSenderId: "118684388526",
    appId: "1:118684388526:web:87cd3d2a1247798d3e313f"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

  const firestore = getFirestore(app)
  const storage = getStorage(app)

export { app, firestore, storage}