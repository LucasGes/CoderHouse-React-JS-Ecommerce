import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCeBghrzfPNugW4IpLRqu0oNArT6HgYDHA",
  authDomain: "la-tienda-online-2b4de.firebaseapp.com",
  projectId: "la-tienda-online-2b4de",
  storageBucket: "la-tienda-online-2b4de.appspot.com",
  messagingSenderId: "700249915431",
  appId: "1:700249915431:web:4d9c0d2a0360cfcffc0e02"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);