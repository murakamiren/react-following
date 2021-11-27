// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAFkQHcZuos1wg8vRe57CrcIBANrKtzo-M",
	authDomain: "react-follow.firebaseapp.com",
	projectId: "react-follow",
	storageBucket: "react-follow.appspot.com",
	messagingSenderId: "523279953335",
	appId: "1:523279953335:web:93a286c8b60d35f8334c32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
