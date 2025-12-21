import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import Home from "./pages/Home.jsx";

function PublicLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
