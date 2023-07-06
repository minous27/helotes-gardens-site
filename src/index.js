import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//firebase imports
import {initializeApp} from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvFgzvy42XhbjbbCndn50DQwVQkZ9bCnQ",
  authDomain: "helotes-haunted-gardens.firebaseapp.com",
  projectId: "helotes-haunted-gardens",
  storageBucket: "helotes-haunted-gardens.appspot.com",
  messagingSenderId: "351691824757",
  appId: "1:351691824757:web:137ed7b31d7e8cf9e4a23c",
  measurementId: "G-LK23BHC1F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);