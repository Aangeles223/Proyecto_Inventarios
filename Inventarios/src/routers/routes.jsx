import { Route, Routes } from "react-router-dom"
import { Home, Login, ProtectedRoute, UserAuth } from "../index"


export function MyRoutes(){
    const { user, loading } = UserAuth() || {};
    return(
        
        <Routes>

            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute user={user} loading={loading} redirectTo="/login" />}>
                <Route path="/" element={<Home />} />
            </Route>
            
        </Routes>
        
    )
}