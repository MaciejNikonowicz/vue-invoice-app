import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBfbdvcKU0qceTtiKBlXUZyvFUMYW9faVM",
  authDomain: "vue-invoice-app-2fabe.firebaseapp.com",
  projectId: "vue-invoice-app-2fabe",
  storageBucket: "vue-invoice-app-2fabe.appspot.com",
  messagingSenderId: "831465709735",
  appId: "1:831465709735:web:f73f71de144bc5c118fb82"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
