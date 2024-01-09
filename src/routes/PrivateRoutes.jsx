import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRouteForUser = ({ children }) => {
  const location = useLocation();
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  } else {
    const path = location.pathname;
    return <Navigate to="/login" state={{ from: path }} />;
  }
};

export const PrivateRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin?.user?.email === "sabbirholybangla@gmail.com") {
    return children;
  } else {
    const path =
      location.pathname === "/dashboard"
        ? "/dashboard/overview"
        : location.pathname;
    return <Navigate to="/login" state={{ from: path }} />;
  }
};
