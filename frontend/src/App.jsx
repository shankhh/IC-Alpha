import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Discover from "./pages/Discover"
import Login from "./pages/Login"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/discover" Component={Discover} />
          {/* <Route path="/" Component={Home} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
