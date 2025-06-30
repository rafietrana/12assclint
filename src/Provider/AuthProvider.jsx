import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import auth from "../Firebase/Firebase";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // // $&
  const singUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const [FinalPayment, setFinalPayment] = useState(0);
  const [FinalPaymentNumber, setFinalPaymentNumber] = useState(0);
  // getFinalProduct Payment
  const getFinalPayment = (dollar, number) => {
    setFinalPayment(dollar);
    setFinalPaymentNumber(number);
  };

  useEffect(() => {
    setLoading(true);
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axios
          .post("https://my-ass-12-server.vercel.app/jwt", userInfo)
          .then((res) => {
            // // $&
            if (res.data.token) {
              localStorage.setItem("access-token", res.data.token);
              setLoading(false);
            }
          });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return () => unSubcribe();
  }, []);

  const authInfo = {
    singUpUser,
    loginUser,
    updateUserProfile,
    getFinalPayment,
    FinalPayment,
    FinalPaymentNumber,
    loading,
    logout,
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
