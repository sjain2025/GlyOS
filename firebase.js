import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACykdij1BF2Bt9rm_ZEa4fzzIIWUQFfWA",
  authDomain: "glyos-8d242.firebaseapp.com",
  projectId: "glyos-8d242",
  storageBucket: "glyos-8d242.appspot.com",
  messagingSenderId: "355753552817",
  appId: "1:355753552817:web:5b4b44804c0c7bf13b2b90"
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()
export { auth };