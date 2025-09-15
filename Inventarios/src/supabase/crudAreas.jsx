import Swal from "sweetalert2";
import { ObtenerIdAuthSupabase, supabase } from "../index";

export const MostrarArea = async (p) => {
  // Corregir nombre del parámetro y manejo de retorno
  const { error, data } = await supabase
    .from("asignararea")
    .select("areas(id,nombre,simbolo)")
    .eq("id_usuario", p.idusuario)
    .maybeSingle();
  if (error) {
    console.error("Error al consultar área:", error);
    return null;
  }
  if (data && data.areas) {
    return data.areas;
  }
  return null;
};
export const ContarUsuariosXarea =async (p)=>{
  const {data,error} = await supabase.rpc("contar_usuarios_por_area",{_id_area:p.id_area})
  if(data){
    return data;
  }
  
}