import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] =useState([])

    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(ture)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In 
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log Out 
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // Manage User 
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () =>{
            unSubscribe();
        }
    } , [])

    const authInfo = {
        user,
        loading, 
        createUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;