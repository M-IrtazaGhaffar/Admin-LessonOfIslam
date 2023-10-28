import { Button } from "@mui/joy";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Notfound from "./pages/Notfound";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="font-Poppins min-h-screen min-w-full">
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<Notfound />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
