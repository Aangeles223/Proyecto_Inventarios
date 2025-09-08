import {create} from "zustand";
import { supabase } from "../index";
export const useAuthStore = create((set,get) => ({
    singInWithEmail:async (p) =>{
        const { data, error } = await supabase.auth.signInWithPassword({
         email: p.correo,
         password: p.pass
       })
       if(error){
        return null;
       }
     },
     singOut:async () =>{
        const { error } = await supabase.auth.signOut()
        if (error)
            throw new Error("Algo a salido mal" + error);
     }
  }))