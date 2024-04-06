import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

// Pages
import Discover from "./pages/Discover"
import Login from "./pages/Login"
import Join from "./pages/Join/Join"
import JoinOnboarding from "./pages/Join/JoinOnboarding"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/discover" Component={Discover} />
          <Route path="/join" Component={Join} />
          <Route path="/join/onboarding" Component={JoinOnboarding} />
          {/* <Route path="/" Component={Home} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
