import {create} from "zustand";
import { InsertarUsuarios, supabase } from "../index";

export const useUsuariosStore = create((set,get) => ({
    insertarUsuarioAdmin:async (p)=>{
        const { data, error } = await supabase.auth.signUp({
            email: p.gmail,
            password: p.pass,
        });
        console.log("data del registro", data);
        if(error) return null;

        // Espera a que la sesión esté activa y obtiene el usuario autenticado
        const { data: userData } = await supabase.auth.getUser();
        if (!userData?.user?.id) return null;

        const datauser = await InsertarUsuarios({
            id_auth: userData.user.id,
            fecharegistro: new Date(),
            tipouser: "admin"
        });
        return datauser;
    },
}));