import {createContext, useContext, useEffect, useState} from "react"
import {supabase} from "../index"
const AuthContext = createContext();
export const AuthContextProvider =({children})=>{
    const [user, setUser] = useState([]);
    useEffect(()=>{
        const {data:authListener} = supabase.auth. onAutStateChange((event, session) =>{
            async (event,session)=>{
                if(session?.user==null){
                    setUser(null)
                }else{
                    setUser(session?.user)
                    
                }
            }
        })
    },[])
}