import {createContext, useContext, useEffect, useState} from "react"
import { supabase } from "../supabase/supabase.config.jsx"
const AuthContext = createContext();
export const AuthContextProvider =({children})=>{
    const [user, setUser] = useState(undefined); // undefined = loading, null = no user
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Recupera el usuario actual al montar
        supabase.auth.getUser().then(({ data: { user } }) => {
            console.log("Usuario recuperado:", user);
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (session?.user == null) {
                setUser(null);
            } else {
                setUser(session.user);
            }
            setLoading(false);
        });
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return(
        <AuthContext.Provider value={{user, loading}}>
            {children}


        </AuthContext.Provider>
    )
}

export const UserAuth =()=>{
    return useContext(AuthContext);
}