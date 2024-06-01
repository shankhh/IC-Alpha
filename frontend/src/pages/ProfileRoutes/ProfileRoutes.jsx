import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "@/store/UserStore";
import { CLIENT_CONSTANTS } from "@/constants/Client";
import BusinessProfile from "../Profiles/BusinessProfile";
import Profile from "../Profiles/Profile";
const ProfileRoutes = () => {
  const { auth } = useUserContext();
  return auth.type == CLIENT_CONSTANTS.BUSINESS ? (
    <BusinessProfile />
  ) : (
    <Profile />
  );
};

export default ProfileRoutes;
