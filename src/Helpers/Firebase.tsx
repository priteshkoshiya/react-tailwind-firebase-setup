import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApsv2XLdwKtI0lddYvOghHvttIu2v11t4",
  authDomain: "react-mania-899d8.firebaseapp.com",
  projectId: "react-mania-899d8",
  storageBucket: "react-mania-899d8.appspot.com",
  messagingSenderId: "765882448893",
  appId: "1:765882448893:web:5b7c11c211887417473794",
  measurementId: "G-5QJGCD3DV1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
