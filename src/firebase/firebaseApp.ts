// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import firebaseConfig from './config';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export default FirebaseApp;
