import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"
import { Paths } from "./router";

export const AuthRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('Access-Token')) {
      navigate(Paths.Users);
      console.log('already authorized');
    }

  }, [navigate]);

  return (
    <Outlet />
  )
}
