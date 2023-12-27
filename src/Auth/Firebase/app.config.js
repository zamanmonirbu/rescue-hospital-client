import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCZZ8ViT204fB30mhhNZ1qSXcjlUUaNqJ0",
  authDomain: "hospital-management-52a9f.firebaseapp.com",
  projectId: "hospital-management-52a9f",
  storageBucket: "hospital-management-52a9f.appspot.com",
  messagingSenderId: "736251394756",
  appId: "1:736251394756:web:e788ec76a07c0042fce791"
};

 const app = initializeApp(firebaseConfig);

 export const auth=getAuth(app);
 export const db = getFirestore(app);