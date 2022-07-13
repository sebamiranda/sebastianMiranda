import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDmvAmJov0FB4vHDdrKbu5dR1iI5IV3i3Q",
  authDomain: "tienda-react-22.firebaseapp.com",
  projectId: "tienda-react-22",
  storageBucket: "tienda-react-22.appspot.com",
  messagingSenderId: "709294029216",
  appId: "1:709294029216:web:6640f68b53212572e20cc5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 // <React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
