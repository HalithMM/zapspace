 
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'  
const firebaseConfig = {
  apiKey: "AIzaSyD2-PjVnME591ghMAiDH3MB47Xbdm5oFeE",
  authDomain: "zapspace-7310a.firebaseapp.com",
  projectId: "zapspace-7310a",
  storageBucket: "zapspace-7310a.firebasestorage.app",
  messagingSenderId: "943476537227",
  appId: "1:943476537227:web:5ac1dbd48a2509e5d6a18e"
};
 
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  