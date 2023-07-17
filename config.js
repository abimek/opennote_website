import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDm1MhtKMXk27ADTU8jelTiuofbRcZgwjY",
  authDomain: "opennote-bbea1.firebaseapp.com",
  projectId: "opennote-bbea1",
  storageBucket: "opennote-bbea1.appspot.com",
  messagingSenderId: "45382407358",
  appId: "1:45382407358:web:6c1b94ec56bd626302faef",
  measurementId: "G-JNPBBBTW7Z"
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;