import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"

// Pages
import Login from "./pages/Login"
import Join from "./pages/Join/Join"
import JoinOnboarding from "./pages/Join/JoinOnboarding"
import Discover from "./pages/Discover"

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
