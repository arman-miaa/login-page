import { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase.init"
import Loading from "../pages/Loading";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,

  signInWithPopup,
  signOut,
} from "firebase/auth";

export const authContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoader(true);
        setUser(currentUser);
        setLoader(false);
    });

    return unsubscribe;
  }, []);

  const logOutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    loader,
    setLoader,
    createUser,

    signInWithGoogle,

    logOutUser,
  };

  return (
    <>
      {loader ? (
        <Loading />
      ) : (
        <authContext.Provider value={authInfo}>{children}</authContext.Provider>
      )}
    </>
  );
};

export default AuthProvider;
