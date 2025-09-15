import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = ({ user, redirectTo, children, loading }) => {
  console.log("ProtectedRoute user:", user, "loading:", loading);
  if (loading) return null; // o un spinner
  if (!user) return <Navigate replace to={redirectTo} />;
    return children ? children : <Outlet />;
}