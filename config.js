import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD3YVARN3_POB4KRGeCfEr4nHRLcSeCgEU",
  authDomain: "e-ride-app-project.firebaseapp.com",
  databaseURL: "https://e-ride-app-project-default-rtdb.firebaseio.com",
  projectId: "e-ride-app-project",
  storageBucket: "e-ride-app-project.appspot.com",
  messagingSenderId: "793221901806",
  appId: "1:793221901806:web:0ed74eb290add5a44af2ff"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
