import  { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase';

export const AuthContext =createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading,setLoading] =useState(true)

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword (auth,email,password);
    }
const signIn =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
}
const logOut =()=>{
    return signOut(auth);
}
    useEffect(()=>{
        const unsubcriber = onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
            setUser(currentUser)
       

        })
        return()=>{
            return unsubcriber
        }
    },[])

   //Google sign In 
   const googleSignIn =()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider);
   }

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;