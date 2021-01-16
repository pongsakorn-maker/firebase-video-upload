import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA_PjmuhTyzJXFM9he8DIKmNFsVL5MrQbc",
  authDomain: "fir-video-upload-487f2.firebaseapp.com",
  projectId: "fir-video-upload-487f2",
  storageBucket: "fir-video-upload-487f2.appspot.com",
  messagingSenderId: "3500866046",
  appId: "1:3500866046:web:785f8d50427bdea38868af",
  measurementId: "G-DGESV4YBP4",
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);