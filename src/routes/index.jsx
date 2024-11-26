import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PublicRoutes from "../routes/PublicRoutes";
import Home from "../pages/home";
import About from "../pages/about";
import Artist from "../pages/artist";
import Staking from "../pages/staking";
import Roadmap from "../pages/roadmap";
import Team from "../pages/team";
import Vesting from "../pages/vesting";
import Marketplace from "../pages/marketplace";

const Routers = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" index element={
                <PublicRoutes>
                    <Home/>
                </PublicRoutes>
            } />
            <Route path="/about" element={
                <PublicRoutes>
                    <About/>
                </PublicRoutes>
            } />
            <Route path="/artist" element={
                <PublicRoutes>
                    <Artist/>
                </PublicRoutes>
            } />
            <Route path="/staking" element={
                <PublicRoutes>
                    <Staking/>
                </PublicRoutes>
            } />
            <Route path="/roadmap" element={
                <PublicRoutes>
                    <Roadmap/>
                </PublicRoutes>
            } />
            <Route path="/team" element={
                <PublicRoutes>
                    <Team/>
                </PublicRoutes>
            } />
            <Route path="/vesting" element={
                <PublicRoutes>
                    <Vesting/>
                </PublicRoutes>
            } />
            <Route path="/marketplace" element={
                <PublicRoutes>
                    <Marketplace/>
                </PublicRoutes>
            } />

        </Routes>
    </Router>
  )
}

export default Routers