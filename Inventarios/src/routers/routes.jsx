import { Routes, Route } from "react-router-dom";
import {
  ErrorMolecula,
  Home,
  Login,
  ProtectedRoute,
  SpinnerLoader,
  UserAuth,
  useAreasStore,
} from "../index";
import { MostrarUsuarios } from "../supabase/crudUsuarios";
import { useQuery } from "@tanstack/react-query";


export function MyRoutes() {
  const { user } = UserAuth();
  const {mostrarAreas} = useAreasStore()
  const { data:datausuarios, isLoading, error } = useQuery({
    queryKey: ["mostrar usuarios"],
    queryFn: MostrarUsuarios,
  });
  const {data:dataAreas}=useQuery({queryKey:["mostrar areas"],queryFn:()=>mostrarAreas({idusaurio:idusuario}),enabled:!!datausuarios})

  if (isLoading){
    return <SpinnerLoader/>
  }
  if(error){
    return <ErrorMolecula mensaje={error.message}/>
  }
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}