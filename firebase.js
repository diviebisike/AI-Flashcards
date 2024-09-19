// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWwO7kbH1VkBnIBlMjdZehDYsBMItxG_M",
  authDomain: "flashcardsaas-de0aa.firebaseapp.com",
  projectId: "flashcardsaas-de0aa",
  storageBucket: "flashcardsaas-de0aa.appspot.com",
  messagingSenderId: "714955732183",
  appId: "1:714955732183:web:905ea65f95efda02ccac92",
  measurementId: "G-GYZBHMFJ5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);