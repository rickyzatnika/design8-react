import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import GetId from "./GetId";
import Home from "../pages/Home";
import Invitation from "../pages/Invitation";
import { AnimatePresence } from "framer-motion";
import BackSound from "./Backsound";

const AnimatedRoutes = ({ audioEl }) => {
    const [isPlay, setIsPlay] = useState(false)
    const location = useLocation()
    return (
        <>
            <BackSound audioEl={audioEl} isPlay={isPlay} setIsPlay={setIsPlay} />
            <AnimatePresence mode="wait">
                <Routes key={location.pathname} location={location} >
                    <Route path="/" element={<Home />} />
                    <Route path="/:uuid" element={<GetId audioEl={audioEl} setIsPlay={setIsPlay} />} />
                    <Route path="/invitation/:uuid" element={<Invitation />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default AnimatedRoutes