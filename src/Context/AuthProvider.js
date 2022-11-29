import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)



const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading]= useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth)
    }
    const singInPop=(provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const updateNameProfile= (profile)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,profile)
    }
  
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        console.log('state change',currentUser);
        setUser(currentUser)
        setLoading(false);

    })
    return()=>{
        return unsubscribe;
    }
   },[])


const getInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    logOut,
    singInPop,
    updateNameProfile


}
    return (
        <div>
            <AuthContext.Provider value={getInfo}>
                {children}

            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;

