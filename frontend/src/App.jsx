import JoinInfluencerNext from "./pages/Join/JoinInfluencerNext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";

// Pages
import Discover from "./pages/Discover";
import Community from "./pages/Community";
import Campaigns from "./pages/Campaigns";

import Login from "./pages/Login";
// import Join from "./pages/Join/Join";
import JoinOnboarding from "./pages/Join/JoinOnboarding";
import BusinessForm from "./pages/Join/JoinBusiness";
import InfluencerForm from "./pages/Join/JoinInfluencer";

import Temp from "./pages/Temp";
import Dashboard from "./pages/Profiles/Dashboard";
import Profile from "./pages/Profiles/Profile";
import Dash from "./pages/Profiles/Dashboardd";
import PrivateRoutes from "./pages/ProtectedRoutes/ProtectedRoutes";
import UserProvider from "./store/UserStore";
function App() {
  return (
    <>
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
            <Route element={<PrivateRoutes />}>
              <Route path="/join/onboarding" Component={JoinOnboarding} />

              <Route path="/temp" Component={Temp} />
              <Route path="/dashboard" Component={Dashboard} />
              <Route path="/profile" Component={Profile} />
              <Route path="/dash" Component={Dash} />
            </Route>
            <Route path="/discover" Component={Discover} />
            <Route path="/campaigns" Component={Campaigns} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
