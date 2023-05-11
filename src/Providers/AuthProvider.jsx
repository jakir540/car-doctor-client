import  { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase';

export const AuthContext =createContext()
const auth = getAuth(app)
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
            setLoading(true)
            setUser(currentUser)
            console.log(currentUser);

        })
        return()=>{
            return unsubcriber
        }
    },[])

    

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;