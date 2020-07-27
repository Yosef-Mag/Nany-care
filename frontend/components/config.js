import Firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyD4WmHSXBUB5uhJm573TMs2CQuhPpchd9s",
    authDomain: "nany-68211.firebaseapp.com",
    databaseURL: "https://nany-68211.firebaseio.com",
    projectId: "nany-68211",
    storageBucket: "nany-68211.appspot.com",
    messagingSenderId: "587285056718",
    appId: "1:587285056718:web:b4c2fbded0a6dc7989549f",
    measurementId: "G-5PWHN6PBSJ"
  };    

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();