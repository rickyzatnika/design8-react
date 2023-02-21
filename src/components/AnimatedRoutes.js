import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Invitation from "../pages/Invitation";
import { AnimatePresence } from "framer-motion";
import BackSound from "./Backsound";
import React, { lazy, Suspense } from 'react';

const GetId = lazy(() => import("./GetId"))

const AnimatedRoutes = () => {

  const location = useLocation()
  return (
    <>

      <BackSound />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location} >
          <Route path="/" element={<Home />} />
          <Route path="/:uuid" element={<Suspense fallback={<div className="w-full min-h-screen flex items-center justify-center bg-white">
            <img src="/loading.svg" alt="loading" />
          </div>}>
            <GetId />
          </Suspense>} />
          <Route path="/invitation/:uuid" element={<Invitation />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default AnimatedRoutes