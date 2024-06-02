 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyDAdycSHKpkotJoRSSmrZqN5TpbTYe_RBs",
  authDomain: "my-ass-12-1aa68.firebaseapp.com",
  projectId: "my-ass-12-1aa68",
  storageBucket: "my-ass-12-1aa68.appspot.com",
  messagingSenderId: "694885188881",
  appId: "1:694885188881:web:030c99821652d078f178b0",
};

 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
