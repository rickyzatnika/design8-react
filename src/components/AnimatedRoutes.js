import { Routes, Route, useLocation } from "react-router-dom";
import GetId from "./GetId";
import Home from "../pages/Home";
import Invitation from "../pages/Invitation";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location} >
                <Route path="/" element={<Home />} />
                <Route path="/:uuid" element={<GetId />} />
                <Route path="/invitation/:uuid" element={<Invitation />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes