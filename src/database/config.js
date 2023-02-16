import { initializeApp } from "firebase/app"
import { getDatabase, ref, push,set, update, get, child } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDy6fCr7kxqNTx5Gyf0YbNQ4odzhz-RV8A",
    authDomain: "photowall-f5fdd.firebaseapp.com",
    databaseURL: "https://photowall-f5fdd-default-rtdb.firebaseio.com",
    projectId: "photowall-f5fdd",
    storageBucket: "photowall-f5fdd.appspot.com",
    messagingSenderId: "519226799403",
    appId: "1:519226799403:web:3163dbe91f45b1b2a8016e"
  }

const app = initializeApp(firebaseConfig)

const db = getDatabase(app)

export {db, ref, push,set, update,get, child}