// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//añadir estos imports
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe3r40DfL5rOPZz4YJAAmmczbutPZNNf8",
  authDomain: "loginfirebase-c10aa.firebaseapp.com",
  projectId: "loginfirebase-c10aa",
  storageBucket: "loginfirebase-c10aa.firebasestorage.app",
  messagingSenderId: "803384426268",
  appId: "1:803384426268:web:49413b71d8eb01719704d9"
};

// Initialize Firebase
//app son las crdenciales 
//con las credenciales se cea un objeto auth que es l autentificacion

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// el objeto base de datos que cada cosa que quiera acceder al firestore usare el db
export const db = getFirestore(app);
