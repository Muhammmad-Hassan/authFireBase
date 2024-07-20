import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children, user }) {
  return user ? children : <Navigate to={"/"}></Navigate>;
}

export default ProtectedRoutes;
