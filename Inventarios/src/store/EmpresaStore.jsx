import { create } from "zustand";
import { InsertarUsuarios, MostrarUsuarios, supabase } from "../index";
import { MostrarArea } from "../supabase/crudAreas";

export const useAreasStore = create((set, get) => ({
  insertarAreaAdmin: async (p) => {
    const { data, error } = await supabase.auth.signUp({
      email: p.correo,
      password: p.pass,
    });

    console.log("data del registro del area auth", data);
    if (error) return;
    const dataarea = await InsertarUsuarios({
      idauth: data.user.id,
      fecharegistro: new Date(),
      tipouser: "admin",
    });
    return dataarea;
  },
  idarea: 0,
  dataarea: null,
  contadorusuarios: 0,
  mostrarAreas: async (p) => {
    // p debe contener idusuario
    const area = await MostrarArea(p);
    let contador = 0;
    if (area?.id) {
      const { ContarUsuariosXarea } = await import("../supabase/crudAreas");
      contador = await ContarUsuariosXarea({ id_area: area.id });
    }
    set({ idarea: area?.id || 0, dataarea: area, contadorusuarios: contador });
    return area;
  },
}));