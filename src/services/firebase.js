import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMD78m89XZc1zmCB_c5q9mrnX0T94sC7Q",
  authDomain: "entertainment-app-d335a.firebaseapp.com",
  projectId: "entertainment-app-d335a",
  storageBucket: "entertainment-app-d335a.appspot.com",
  messagingSenderId: "77940907961",
  appId: "1:77940907961:web:34f8e7c6b3021058d9a068",
  measurementId: "G-941LFJW6G8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
