import JoinInfluencerNext from "./pages/Join/JoinInfluencerNext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Pages
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import AboutUs from "./pages/About";

import Login from "./pages/Login";
// import Join from "./pages/Join/Join";
import JoinOnboarding from "./pages/Join/JoinOnboarding";
import BusinessForm from "./pages/Join/JoinBusiness";
import InfluencerForm from "./pages/Join/JoinInfluencer";

import Temp from "./pages/Temp";
import Dashboard from "./pages/Profiles/Dashboard";
import Profile from "./pages/Profiles/Profile";
import ProfileById from "./pages/Profiles/ProfileById";
import Dash from "./pages/Profiles/Dashboardd";
import PrivateRoutes from "./pages/ProtectedRoutes/ProtectedRoutes";
import UserProvider from "./store/UserStore";
import CampaignsForm from "./pages/CampaignPages/CampaignsForm";
import Campaigns from "./pages/Campaigns";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <Router>
            <Routes>
              {/* <Route path="/" Component={Home} /> */}
              <Route path="/" Component={Home} />
              <Route path="/login" Component={Login} />
              <Route path="/join/business" Component={BusinessForm} />
              <Route path="/join/influencer" Component={InfluencerForm} />
              {/* <Route path="/join" Component={Join} /> */}
              <Route
                path="/join/influencer/next/:id"
                Component={JoinInfluencerNext}
              />
              <Route path="/campaignform" Component={CampaignsForm} />

              <Route element={<PrivateRoutes />}>
                <Route path="/join/onboarding" Component={JoinOnboarding} />

                <Route path="/temp" Component={Temp} />
                <Route path="/dashboard" Component={Dashboard} />
                <Route path="/profile" Component={Profile} />
                <Route path="/profile/:id" Component={ProfileById} />
                <Route path="/dash" Component={Dash} />
              </Route>
              <Route path="/discover" Component={Discover} />
              <Route path="/campaigns" Component={Campaigns} />
              <Route path="/aboutus" Component={AboutUs} />
            </Routes>
          </Router>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
