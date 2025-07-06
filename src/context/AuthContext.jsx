import React, { createContext, useState, useEffect, useContext } from 'react';
import {auth} from '../firebaseConfig';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

//We create the context for authentication
const AuthContext = createContext();

// Custom hook to use the AuthContext
//Helps to acess any hook that acess the AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // To track if auth state is being loaded

  // Firebase Authentication functions
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Effect to listen for authentication state changes
  useEffect(() => {
    // onAuthStateChanged returns an unsubscribe function
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // user will be null if logged out, or a user object if logged in
      setLoading(false); // Auth state has been loaded
    });

    // Cleanup subscription on component unmount
    return unsubscribe;
  }, []); // Empty dependency array means this runs once on mount

  // Value to provide to consumers of this context
  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    loading // Expose loading state
  };

  //Render the AuthContext provider with the value
  // If loading is true, we don't render children to avoid showing UI before auth state is known
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}  
    </AuthContext.Provider>
  );
};