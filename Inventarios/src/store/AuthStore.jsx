import {create} from "zustand";
import { supabase } from "../index";
export const useAuthStore = create((set,get) => ({
    signInWithEmail:async (p) =>{
        const { data, error } = await supabase.auth.signInWithPassword({
         email: p.correo || p.email,
         password: p.pass
       })
       if(error){
        return null;
       }
       return data;
     },
   signOut:async () =>{
    const { error } = await supabase.auth.signOut()
    if (error)
      throw new Error("Algo a salido mal" + error);
   }
  }))