import { initializeApp, getApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCJ8qqcRssEr2aZK2K-mgWl4SMgYX840AQ",
  authDomain: "rhumboulet.firebaseapp.com",
  projectId: "rhumboulet",
  storageBucket: "rhumboulet.appspot.com",
  messagingSenderId: "577753672616",
  appId: "1:577753672616:web:ff01d96003078de2684b9d"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// initialize Firebase Auth for that app immediately
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, auth, getApp, getAuth };