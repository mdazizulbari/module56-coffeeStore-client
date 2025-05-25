// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm399M4imcAg66aDOh30fOe9ZvQ0LiPf8",
  authDomain: "module56-coffeestore.firebaseapp.com",
  projectId: "module56-coffeestore",
  storageBucket: "module56-coffeestore.firebasestorage.app",
  messagingSenderId: "285257664773",
  appId: "1:285257664773:web:47cc2e4e2866b2c5ba0f6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
