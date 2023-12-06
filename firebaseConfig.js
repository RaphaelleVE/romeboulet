import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJ8qqcRssEr2aZK2K-mgWl4SMgYX840AQ",
  authDomain: "rhumboulet.firebaseapp.com",
  projectId: "rhumboulet",
  storageBucket: "rhumboulet.appspot.com",
  messagingSenderId: "577753672616",
  appId: "1:577753672616:web:ff01d96003078de2684b9d"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);