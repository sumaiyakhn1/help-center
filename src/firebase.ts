import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB2niBXJp6wbfrZY4l_P7UEZTBF4ZKnWTY",
  authDomain: "okiedokiepayweb.firebaseapp.com",
  databaseURL: "https://okiedokiepayweb-default-rtdb.firebaseio.com",
  projectId: "okiedokiepayweb",
  storageBucket: "okiedokiepayweb.firebasestorage.app",
  messagingSenderId: "657737322779",
  appId: "1:657737322779:web:0bddda1046e0aafee2c3be",
  measurementId: "G-JKPQ2D9TSG"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
