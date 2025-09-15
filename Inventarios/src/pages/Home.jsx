import React from "react";
import { useQuery } from "@tanstack/react-query";
import { HomeTemplate, useAreasStore } from "../index";
import { ContarUsuariosXarea } from "../supabase/crudAreas";
export function Home() {
  const { idarea, mostrarAreas, dataarea } = useAreasStore();

  // Inicializa el área al montar (ajusta el idusuario según tu contexto)
  React.useEffect(() => {
    mostrarAreas({ idusuario: "ID_DEL_USUARIO" });
  }, []);

  // Ejecuta la query solo si idarea existe
  const { data: usuariosPorArea, isLoading } = useQuery({
    queryKey: ["contar usuarios por area", { idarea }],
    queryFn: () => ContarUsuariosXarea({ id_area: idarea }),
    enabled: !!idarea
  });

  return (<HomeTemplate usuariosPorArea={usuariosPorArea} isLoading={isLoading} />);
}