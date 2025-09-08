import {createContext, useContext, useEffect, useState} from "react"
import { supabase } from "../supabase/supabase.config.jsx"
const AuthContext = createContext();
export const AuthContextProvider =({children})=>{
    const [user, setUser] = useState(null);
    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (session?.user == null) {
                setUser(null);
            } else {
                setUser(session.user);
            }
        });
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return(
        <AuthContext.Provider value={{user}}>
            {children}


        </AuthContext.Provider>
    )
}

export const UserAuth =()=>{
    return useContext(AuthContext);
}