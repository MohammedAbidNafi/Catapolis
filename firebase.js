
    //Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyABbbgXrdR_fUn8_j9hrXxg9wELsCmADGY",
    authDomain: "catapolis-7c718.firebaseapp.com",
    projectId: "catapolis-7c718",
    storageBucket: "catapolis-7c718.appspot.com",
    messagingSenderId: "1098999449580",
    appId: "1:1098999449580:web:bb3fa56a6534fd309b62c9",
    measurementId: "G-9PDJYVMEN9"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
