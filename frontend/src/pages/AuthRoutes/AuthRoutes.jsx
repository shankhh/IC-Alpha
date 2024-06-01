import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "@/store/UserStore";
const AuthRoutes = () => {
  const { auth } = useUserContext();
  return !auth.is_auth ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRoutes;
