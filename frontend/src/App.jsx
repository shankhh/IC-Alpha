import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"

// Pages
import Login from "./pages/Login"
import Join from "./pages/Join/Join"
import JoinOnboarding from "./pages/Join/JoinOnboarding"
import Discover from "./pages/Discover"
import Community from "./pages/Community"
import Pricing from "./pages/Pricing"

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" Component={Home} /> */}
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/join" Component={Join} />
          <Route path="/join/onboarding" Component={JoinOnboarding} />
          
          <Route path="/discover" Component={Discover} />
          <Route path="/community" Component={Community} />
          <Route path="/pricing" Component={Pricing} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
