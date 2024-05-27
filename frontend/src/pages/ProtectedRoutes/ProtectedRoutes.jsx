import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "@/store/UserStore";
const PrivateRoutes = () => {
  const { auth } = useUserContext();
  console.log(auth);
  // return auth.is_auth ? <Outlet /> : <Navigate to="/login" />;
  return true ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
