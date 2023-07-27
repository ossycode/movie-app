import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId,
// };

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
