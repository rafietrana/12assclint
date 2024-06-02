import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import auth from "../Firebase/Firebase";
import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const singUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

 const loginUser = (email, password) =>{
  return signInWithEmailAndPassword(email, password)
 }

  const authInfo = {
    singUpUser,
    loginUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
