/*jshint esversion: 6 */ 

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyBljcG2DgoENWR-FjwFcrAYXlxCK5Gkt6M",
    authDomain: "vue-practice-code.firebaseapp.com",
    projectId: "vue-practice-code",
    storageBucket: "vue-practice-code.appspot.com",
    messagingSenderId: "527594944294",
    appId: "1:527594944294:web:e4ec496c1a7fa3437833e7"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatRef = db.ref("chats");

export default firebase;