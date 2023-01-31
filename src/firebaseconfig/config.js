

// const firebaseConfig = {
//   apiKey: "AIzaSyBopSCDwvMnRka6UmnHl-cBggSVs3T-auw",
//   authDomain: "welcome-home-f1f37.firebaseapp.com",
//   databaseURL: "https://welcome-home-f1f37.firebaseio.com",
//   projectId: "welcome-home-f1f37",
//   storageBucket: "welcome-home-f1f37.appspot.com",
//   messagingSenderId: "584932731101",
//   appId: "1:584932731101:web:bf1aee4a7714a46e52d334",
//   measurementId: "G-F4QHPSBEY3"
// };

// const app = firebase.initializeApp(firebaseConfig);

// const projectStorage = firebase.storage();
// const projectFirestore = firebase.firestore();
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export { projectStorage, projectFirestore, timestamp, app };
// import "firebase/compat/app";
/////
//import  firebase from "firebase/app"
//import firebase from "firebase/compat/app";




// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

////////////////////////////////////////////////////
///////////////////////////////////////////////////
// import * as firebase from "firebase/app";
// import { initializeApp } from "firebase/app";
// import {} from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// import "firebase/compat/storage";
// import "firebase/compat/firestore";

// import "firebase/firestore";
// import "firebase/auth";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration

////// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//////////////////////////////////////////////////////////////////////////
// import * as firebase from "firebase/app"
// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// const firebaseConfig = {
//   apiKey: "AIzaSyBopSCDwvMnRka6UmnHl-cBggSVs3T-auw",
//   authDomain: "welcome-home-f1f37.firebaseapp.com",
//   databaseURL: "https://welcome-home-f1f37.firebaseio.com",
//   projectId: "welcome-home-f1f37",
//   storageBucket: "welcome-home-f1f37.appspot.com",
//   messagingSenderId: "584932731101",
//   appId: "1:584932731101:web:bf1aee4a7714a46e52d334",
//   measurementId: "G-F4QHPSBEY3"
// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// //const analytics = getAnalytics(app);

// const projectStorage = firebase.storage();
// const projectFirestore = getFirestore(app);
// const auth = firebase.auth();
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export { projectStorage, projectFirestore, timestamp, app, auth };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = { apiKey: "AIzaSyBopSCDwvMnRka6UmnHl-cBggSVs3T-auw",
authDomain: "welcome-home-f1f37.firebaseapp.com",
databaseURL: "https://welcome-home-f1f37.firebaseio.com",
projectId: "welcome-home-f1f37",
storageBucket: "welcome-home-f1f37.appspot.com",
messagingSenderId: "584932731101",
appId: "1:584932731101:web:bf1aee4a7714a46e52d334",
measurementId: "G-F4QHPSBEY3"};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const fbDatabase = getDatabase(app);
export const fStore = getFirestore(app);
export const fStorage = getStorage(app);