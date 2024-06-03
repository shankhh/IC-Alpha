import CampaignForum from "./pages/CampaignForum/CampaignForum";
import AppliedInfluencer from "./pages/AppliedInfluencer/AppliedInfluencer";
import ProfileRoutes from "./pages/ProfileRoutes/ProfileRoutes";
import { CLIENT_CONSTANTS } from "./constants/Client";
import JoinInfluencerNext from "./pages/Join/JoinInfluencerNext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Pages
import { useUserContext } from "./store/UserStore";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import AboutUs from "./pages/About";

import Login from "./pages/Login";
// import Join from "./pages/Join/Join";
import JoinOnboarding from "./pages/Join/JoinOnboarding";
import BusinessForm from "./pages/Join/JoinBusiness";
import InfluencerForm from "./pages/Join/JoinInfluencer";

import Temp from "./pages/Temp";
import InlfluencerDashboard from "./pages/Profiles/InlfuencerDashboard";
import Profile from "./pages/Profiles/Profile";
import ProfileById from "./pages/Profiles/ProfileById";
import BusinessProfile from "./pages/Profiles/BusinessProfile";
import PrivateRoutes from "./pages/ProtectedRoutes/ProtectedRoutes";
import UserProvider from "./store/UserStore";
import CampaignsForm from "./pages/CampaignPages/CampaignsForm";
import Campaigns from "./pages/Campaigns";
import AuthRoutes from "./pages/AuthRoutes/AuthRoutes";
const queryClient = new QueryClient();
function App() {
  const { auth } = useUserContext();
  console.log(auth);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <Router>
            <Routes>
              <Route element={<AuthRoutes />}>
                <Route path="/login" Component={Login} />
                <Route path="/join/business" Component={BusinessForm} />
                <Route path="/join/influencer" Component={InfluencerForm} />
                <Route
                  path="/join/influencer/next/:id"
                  Component={JoinInfluencerNext}
                />
              </Route>
              {/* <Route path="/join" Component={Join} /> */}
              <Route element={<PrivateRoutes />}>
                <Route path="/campaignform" Component={CampaignsForm} />
                <Route path="/temp" Component={Temp} />
                <Route path="/dashboard" Component={InlfluencerDashboard} />
                <Route path="/profile" element={<ProfileRoutes />} />
                <Route path="/profile/:id" Component={ProfileById} />
                <Route path="/join/onboarding" element={<JoinOnboarding />} />
                <Route
                  path="/applied/influencer/:id"
                  Component={AppliedInfluencer}
                />
                <Route path="/campaignforum/:id" Component={CampaignForum} />
              </Route>
              <Route path="/discover" Component={Discover} />
              <Route path="/campaigns" Component={Campaigns} />
              <Route path="/aboutus" Component={AboutUs} />
              <Route path="/" Component={Home} />
            </Routes>
          </Router>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
