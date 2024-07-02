"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.db = void 0;
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const analytics_1 = require("firebase/analytics");
const auth_1 = require("firebase/auth");
const firestore_1 = require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMfjUpyIckXQG4WFX1xpIFuEI5z9wgSs4",
    authDomain: "login-auth-5b9a1.firebaseapp.com",
    projectId: "login-auth-5b9a1",
    storageBucket: "login-auth-5b9a1.appspot.com",
    messagingSenderId: "382339698580",
    appId: "1:382339698580:web:d1dd58a17672a1863ac981",
    measurementId: "G-BY4458NGEH",
};
// Initialize Firebase
const app = (0, app_1.initializeApp)(firebaseConfig);
const analytics = (0, analytics_1.getAnalytics)(app);
exports.db = (0, firestore_1.getFirestore)(app);
exports.auth = (0, auth_1.getAuth)();
exports.default = app;
